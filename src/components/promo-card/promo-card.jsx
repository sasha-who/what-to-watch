import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {InListIcon, AddToListIcon} from "../../const.js";

const PromoCard = ({promoFilm, onFavoriteStatusChange, onActiveFilmChange}) => {
  const {id, title, genre, release, isFavorite} = promoFilm;
  const myListIcon = isFavorite ? InListIcon : AddToListIcon;

  return (
    <React.Fragment>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width={218}
              height={327}
            />
          </div>
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
                onClick={() => {
                  onActiveFilmChange(promoFilm);
                }}
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

                  onFavoriteStatusChange(id, status, true);
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PromoCard.propTypes = {
  promoFilm: PropTypes.shape({
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
  onFavoriteStatusChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired
};

export default PromoCard;
