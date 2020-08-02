import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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

class GenresList extends React.PureComponent {
  componentWillUnmount() {
    this.props.onGenreChange(DEFAULT_GENRE);
  }

  render() {
    const {
      films,
      currentGenre,
      onGenreChange,
      onFilmsCountToShowReset
    } = this.props;

    return (
      <ul className="catalog__genres-list">
        {generateGenresList(films).map((genre) => {
          const activeClass = classNames({
            'catalog__genres-item--active': genre.toLowerCase() === currentGenre
          });

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
                    onFilmsCountToShowReset();
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
  }
}

GenresList.propTypes = {
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
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired
};

export default GenresList;
