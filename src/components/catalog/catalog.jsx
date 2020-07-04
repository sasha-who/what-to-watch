import React from "react";
import PropTypes from "prop-types";
import {GENRES} from "../../const.js";
import FilmsList from "../films-list/films-list.jsx";

const getActiveGenre = (index) => ((index === 0) ? `catalog__genres-item--active` : ``);

const Catalog = ({films, onCardClick}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <ul className="catalog__genres-list">
      {GENRES.map((genre, index) => (
        <li className={`catalog__genres-item ${getActiveGenre(index)}`} key={genre}>
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
    <FilmsList
      films={films}
      onCardClick={onCardClick}
    />
    <div className="catalog__more">
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  </section>
);

Catalog.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
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
      })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Catalog;
