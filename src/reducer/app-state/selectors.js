import {createSelector} from "reselect";
import {getFilmsFilteredByGenre, getSimilarForCurrentFilm} from "../../utils/common.js";
import NameSpace from "../name-space.js";
import {getFilms, getFilmsLoadState} from "../data/selectors.js";

const NAME_SPACE = NameSpace.APP_STATE;

export const getActiveScreen = (state) => {
  return state[NAME_SPACE].activeScreen;
};

export const getCurrentGenre = (state) => {
  return state[NAME_SPACE].currentGenre;
};

export const getFilmsCountToShow = (state) => {
  return state[NAME_SPACE].filmsCountToShow;
};

export const getPlayerState = (state) => {
  return state[NAME_SPACE].isPlayerActive;
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
