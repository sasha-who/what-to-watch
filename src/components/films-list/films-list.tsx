import * as React from "react";
import FilmCard from "../films-card/film-card";
import withFilmCard from "../../hocs/with-film-card/with-film-card";
import ShowMoreButton from "../show-more/show-more";
import {Film} from "../../types";

interface Props {
  films: Film[];
  filmsCountToShow?: number;
  onFilmsCountToShowIncrement?: () => void;
  loadFilmComments: () => void;
}

const FilmCardWrapped = withFilmCard(FilmCard);

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
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

export default FilmsList;
