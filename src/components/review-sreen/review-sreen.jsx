import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import ReviewForm from "../review-form/review-form.jsx";

const ReviewScreen = (props) => {
  const {film, authorizationData, authorizationStatus, onScreenChange} = props;
  const {title, cover, poster} = film;

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
          onScreenChange={onScreenChange}
        >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">
                  {title}
                </a>
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
      <ReviewForm />
    </section>
  );
};

ReviewScreen.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  onScreenChange: PropTypes.func.isRequired
};

export default ReviewScreen;