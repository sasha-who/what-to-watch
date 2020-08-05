import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list.jsx";
import FilmsList from "../films-list/films-list.jsx";

const Catalog = (props) => {
  const {
    films,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    onCardClick,
    onGenreChange,
    filterFilmsByGenre,
    resetFilmsCountToShow,
    incrementFilmsCountToShow
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList
        films={films}
        currentGenre={currentGenre}
        onGenreChange={onGenreChange}
        filterFilmsByGenre={filterFilmsByGenre}
        resetFilmsCountToShow={resetFilmsCountToShow}
      />
      <FilmsList
        films={filteredFilms}
        filmsCountToShow={filmsCountToShow}
        onCardClick={onCardClick}
        incrementFilmsCountToShow={incrementFilmsCountToShow}
      />
    </section>
  );
};

Catalog.propTypes = {
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
  filteredFilms: PropTypes.arrayOf(
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
  filmsCountToShow: PropTypes.number,
  currentGenre: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filterFilmsByGenre: PropTypes.func.isRequired,
  resetFilmsCountToShow: PropTypes.func.isRequired,
  incrementFilmsCountToShow: PropTypes.func
};

export default Catalog;
