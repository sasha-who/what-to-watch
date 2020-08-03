import * as React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list.jsx";
import FilmsList from "../films-list/films-list.jsx";

const Catalog = (props) => {
  const {
    films,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    onGenreChange,
    onFilmsCountToShowReset,
    onFilmsCountToShowIncrement,
    loadFilmComments
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList
        films={films}
        currentGenre={currentGenre}
        onGenreChange={onGenreChange}
        onFilmsCountToShowReset={onFilmsCountToShowReset}
      />
      <FilmsList
        films={filteredFilms}
        filmsCountToShow={filmsCountToShow}
        onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
        loadFilmComments={loadFilmComments}
      />
    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ).isRequired,
  filmsCountToShow: PropTypes.number,
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  loadFilmComments: PropTypes.func.isRequired
};

export default Catalog;
