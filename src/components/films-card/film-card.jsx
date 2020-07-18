import React from "react";
import PropTypes from "prop-types";
import {Screen} from "../../const.js";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  const {
    film,
    isPlaying,
    onScreenChange,
    onActiveFilmChange,
    onStartPlaying,
    onStopPlaying,
    onHoverChange,
    onSimilarFilmsUpdate
  } = props;

  const {title, cover, preview} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onHoverChange();
        onStartPlaying();
      }}
      onMouseLeave={() => {
        onHoverChange();
        onStopPlaying();
      }}
      onClick={() => {
        onScreenChange(Screen.CARD);
        onActiveFilmChange(film);
        onSimilarFilmsUpdate();
      }}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          preview={preview}
          defaultImage={cover}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
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
    actors: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          userName: PropTypes.string.isRequired,
          date: PropTypes.instanceOf(Date).isRequired
        })
    ).isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onStartPlaying: PropTypes.func.isRequired,
  onStopPlaying: PropTypes.func.isRequired,
  onHoverChange: PropTypes.func.isRequired,
  onSimilarFilmsUpdate: PropTypes.func.isRequired
};

export default FilmCard;
