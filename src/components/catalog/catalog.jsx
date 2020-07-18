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
    onScreenChange,
    onActiveFilmChange,
    onGenreChange,
    onFilmsFilterByGenre,
    onFilmsCountToShowReset,
    onFilmsCountToShowIncrement,
    onSimilarFilmsUpdate
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList
        films={films}
        currentGenre={currentGenre}
        onGenreChange={onGenreChange}
        onFilmsFilterByGenre={onFilmsFilterByGenre}
        onFilmsCountToShowReset={onFilmsCountToShowReset}
      />
      <FilmsList
        films={filteredFilms}
        filmsCountToShow={filmsCountToShow}
        onScreenChange={onScreenChange}
        onActiveFilmChange={onActiveFilmChange}
        onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
        onSimilarFilmsUpdate={onSimilarFilmsUpdate}
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
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsFilterByGenre: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  onSimilarFilmsUpdate: PropTypes.func.isRequired
};

export default Catalog;
