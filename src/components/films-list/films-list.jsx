import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../films-card/film-card.jsx";
import withFilmCard from "../../hocs/with-film-card/with-film-card.js";
import ShowMoreButton from "../show-more/show-more.jsx";

const FilmCardWrapped = withFilmCard(FilmCard);

const FilmsList = (props) => {
  const {
    films,
    filmsCountToShow,
    onFilmsCountToShowIncrement,
    loadFilmComments
  } = props;

  const shownFilms = films.slice(0, filmsCountToShow);
  const isAnyFilmsToShow = films.length > filmsCountToShow;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {shownFilms.map((film) => (
          <FilmCardWrapped
            film={film}
            loadFilmComments={loadFilmComments}
            key={film.id}
          />
        ))}
      </div>
      {isAnyFilmsToShow &&
        <ShowMoreButton
          onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
        />
      }
    </React.Fragment>
  );
};

FilmsList.propTypes = {
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
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ).isRequired,
  filmsCountToShow: PropTypes.number,
  onFilmsCountToShowIncrement: PropTypes.func,
  loadFilmComments: PropTypes.func.isRequired
};

export default FilmsList;
