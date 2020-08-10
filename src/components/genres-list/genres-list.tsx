import * as React from "react";
import classNames from "classnames";
import {DEFAULT_GENRE, MAX_FILTERS_COUNT} from "../../const";
import {Film} from "../../types";

interface Props {
  films: Film[];
  currentGenre: string;
  onGenreChange: (genre: string) => void;
  onFilmsCountToShowReset: () => void;
}

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

class GenresList extends React.PureComponent<Props, null> {
  componentWillUnmount(): void {
    this.props.onGenreChange(DEFAULT_GENRE);
  }

  render(): React.ReactNode {
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
                  evt.preventDefault();

                  if (genre !== currentGenre) {
                    onGenreChange((evt.target as Element).textContent.toLowerCase());
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

export default GenresList;
