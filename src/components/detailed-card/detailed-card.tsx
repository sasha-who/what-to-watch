import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  LoaderData,
  AddToListIcon,
  InListIcon,
  HeaderType
} from "../../const";
import {getFilmFromParameters} from "../../utils/common";
import Header from "../header/header";
import Footer from "../footer/footer";
import FilmsList from "../films-list/films-list";
import Tabs from "../tabs/tabs";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import {AuthorizationData, Film, Comment} from "../../types";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  films: Film[];
  similarFilms: Film[];
  activeFilmComments: Comment[];
  isCommentsLoaded: boolean;
  onActiveFilmChange: (film: Film) => void;
  onFavoriteStatusChange: (id: number, status: number, isPromoFilm: boolean) => void;
  loadFilmComments: (id: number) => void;
}

const TabsWrapped = withActiveTab(Tabs);

class DetailedFilmCard extends React.PureComponent<Props, null> {
  componentDidMount(): void {
    const {films, loadFilmComments, onActiveFilmChange} = this.props;
    const film = getFilmFromParameters(films, this.props.match.params.id);

    loadFilmComments(film.id);
    onActiveFilmChange(film);
  }

  render(): React.ReactNode {
    const {
      authorizationStatus,
      authorizationData,
      isCommentsLoaded,
      films,
      similarFilms,
      activeFilmComments,
      onFavoriteStatusChange
    } = this.props;

    if (!isCommentsLoaded) {
      return (
        <div style={LoaderData.STYLE}>
          <Loader
            type={LoaderData.TYPE}
            color={LoaderData.COLOR}
            width={LoaderData.HEIGHT}
            height={LoaderData.WIDTH}
          />
        </div>
      );
    }

    const film = getFilmFromParameters(films, this.props.match.params.id);

    const {
      id,
      title,
      cover,
      poster,
      genre,
      release,
      isFavorite
    } = film;

    const myListIcon = isFavorite ? InListIcon : AddToListIcon;
    const isSimilarFilmsExist = similarFilms.length > 0;

    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={cover}
                alt={title}
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header
              type={HeaderType.FILM_CARD}
              authorizationData={authorizationData}
              authorizationStatus={authorizationStatus}
            />
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{release}</span>
                </p>
                <div className="movie-card__buttons">
                  <Link
                    className="btn btn--play movie-card__button"
                    to={`/player/${id}`}
                  >
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => {
                      const status = isFavorite ? 0 : 1;

                      onFavoriteStatusChange(id, status, false);
                    }}
                  >
                    <svg
                      viewBox={`0 0 ${myListIcon.WIDTH} ${myListIcon.HEIGHT}`}
                      width={myListIcon.WIDTH}
                      height={myListIcon.HEIGHT}
                    >
                      <use xlinkHref={`#${myListIcon.ID}`} />
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link
                    to={`/films/${id}/review`}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={poster}
                  alt={title}
                  width={218}
                  height={327}
                />
              </div>
              <div className="movie-card__desc">
                <TabsWrapped
                  film={film}
                  activeFilmComments={activeFilmComments}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          {isSimilarFilmsExist &&
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <FilmsList
                films={similarFilms}
              />
            </section>
          }
          <Footer />
        </div>
      </div>
    );
  }
}

export default DetailedFilmCard;
