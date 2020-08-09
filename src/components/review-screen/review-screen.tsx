import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {getFilmFromParameters} from "../../utils/common";
import Header from "../header/header";
import ReviewForm from "../review-form/review-form";
import {Film, AuthorizationData} from "../../types";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  films: Film[];
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  commentPostStatus: string;
  postReview: () => void;
}

const ReviewScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
    authorizationData,
    authorizationStatus,
    commentPostStatus,
    postReview
  } = props;

  const film = getFilmFromParameters(films, props.match.params.id);

  const {id, title, cover, poster} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={cover}
            alt={title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header
          authorizationData={authorizationData}
          authorizationStatus={authorizationStatus}
        >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={`/films/${id}`}
                >
                  {title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={poster}
            alt={title}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm
        film={film}
        postReview={postReview}
        commentPostStatus={commentPostStatus}
      />
    </section>
  );
};

export default ReviewScreen;
