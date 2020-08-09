import * as React from "react";
import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";
import {Film} from "../../types";

interface Props {
  films: Film[];
  filteredFilms: Film[];
  filmsCountToShow?: number;
  currentGenre: string;
  onGenreChange: () => void;
  onFilmsCountToShowReset: () => void;
  onFilmsCountToShowIncrement?: () => void;
}

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    onGenreChange,
    onFilmsCountToShowReset,
    onFilmsCountToShowIncrement
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
      />
    </section>
  );
};

export default Catalog;
