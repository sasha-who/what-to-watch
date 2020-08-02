import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  const {
    film,
    isPlaying,
    onStartPlaying,
    onStopPlaying,
    onHoverChange
  } = props;

  const {id, title, previewImage, previewVideo} = film;

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
    >
      <Link
        className="small-movie-card__image"
        to={`/films/${id}`}
      >
        <VideoPlayer
          previewVideo={previewVideo}
          defaultImage={previewImage}
          isPlaying={isPlaying}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
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
    previewImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onStartPlaying: PropTypes.func.isRequired,
  onStopPlaying: PropTypes.func.isRequired,
  onHoverChange: PropTypes.func.isRequired
};

export default FilmCard;
