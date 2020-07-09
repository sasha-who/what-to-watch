import React from "react";
import PropTypes from "prop-types";
import {DEFAULT_GENRE, MAX_FILTERS_COUNT} from "../../const.js";

const generateGenresList = (films) => {
  const genresList = [DEFAULT_GENRE];

  for (const film of films) {
    if (!genresList.includes(film.genre) && genresList.length < MAX_FILTERS_COUNT) {
      genresList.push(film.genre);
    }
  }

  return genresList;
};

const getGenreWithCapital = (genre) => {
  return genre[0].toUpperCase() + genre.slice(1);
};

const GenresList = ({films, currentGenre, onGenreChange, filterFilmsByGenre}) => (
  <ul className="catalog__genres-list">
    {generateGenresList(films).map((genre) => {
      const activeClass = (genre === currentGenre) ? `catalog__genres-item--active` : ``;

      return (
        <li
          className={`catalog__genres-item ${activeClass}`}
          key={genre}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              if (genre !== currentGenre) {
                onGenreChange(evt.target.textContent.toLowerCase());
                filterFilmsByGenre();
              }
            }}
          >
            {getGenreWithCapital(genre)}
          </a>
        </li>
      );
    })}
  </ul>
);

GenresList.propTypes = {
  films: PropTypes.arrayOf(
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
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              userName: PropTypes.string.isRequired,
              date: PropTypes.instanceOf(Date).isRequired
            })
        ).isRequired
      })
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filterFilmsByGenre: PropTypes.func.isRequired
};

export default GenresList;
