import React from "react";
import PropTypes from "prop-types";
import {RatingRange, RatingGrade} from "../../const.js";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import FilmsList from "../films-list/films-list.jsx";

const getRatingGrade = (rating) => {
  switch (true) {
    case rating >= RatingRange.MIN && rating < RatingRange.MAX_BAD:
      return RatingGrade.BAD;

    case rating >= RatingRange.MAX_BAD && rating < RatingRange.MAX_NORMAL:
      return RatingGrade.NORMAL;

    case rating >= RatingRange.MAX_NORMAL && rating < RatingRange.MAX_GOOD:
      return RatingGrade.GOOD;

    case rating >= RatingRange.MAX_GOOD && rating < RatingRange.MAX:
      return RatingGrade.VERY_GOOD;

    case rating === RatingRange.MAX:
      return RatingGrade.AWESOME;

    default:
      return RatingGrade.BAD;
  }
};

const DetailedFilmCard = ({film, recomendedFilms, onCardClick}) => {
  const {
    title,
    cover,
    poster,
    genre,
    release,
    rating,
    ratingsCount,
    description,
    director,
    actors
  } = film;

  const ratingGrade = getRatingGrade(rating);
  const actorsList = actors.join(`, `);

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
          <Header />
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
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
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{ratingGrade}</span>
                  <span className="movie-rating__count">{ratingsCount} ratings</span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{description}</p>
                <p className="movie-card__director">
                  <strong>Director: {director}</strong>
                </p>
                <p className="movie-card__starring">
                  <strong>
                    Starring: {actorsList} and other
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList
            films={recomendedFilms}
            onCardClick={onCardClick}
          />
        </section>
        <Footer />
      </div>
    </div>
  );
};

DetailedFilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  recomendedFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string)
      })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default DetailedFilmCard;
