import {createSelector} from "reselect";
import {getFilmsFilteredByGenre, getSimilarForCurrentFilm} from "../../utils/common";
import NameSpace from "../name-space";
import {getFilms, getFilmsLoadState} from "../data/selectors";

const NAME_SPACE = NameSpace.APP_STATE;

export const getCurrentGenre = (state) => {
  return state[NAME_SPACE].currentGenre;
};

export const getFilmsCountToShow = (state) => {
  return state[NAME_SPACE].filmsCountToShow;
};

export const getActiveFilm = (state) => {
  return state[NAME_SPACE].activeFilm;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getCurrentGenre,
    (films, genre) => {
      return getFilmsFilteredByGenre(films, genre);
    }
);

export const getSimilarFilms = createSelector(
    getFilms,
    getActiveFilm,
    getFilmsLoadState,
    (films, activeFilm, isFilmsLoaded) => {
      if (!isFilmsLoaded || !activeFilm) {
        return [];
      }

      return getSimilarForCurrentFilm(films, activeFilm);
    }
);
