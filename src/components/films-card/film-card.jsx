import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({film, onTitleClick, onCardHover}) => {
  const {title, cover} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={(evt) => {
        onCardHover(film, evt.target);
      }}
    >
      <div className="small-movie-card__image">
        <img src={cover} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onTitleClick}
        >{title}</a>
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
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default FilmCard;
