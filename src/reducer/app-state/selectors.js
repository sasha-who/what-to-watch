import {createSelector} from "reselect";
import {getFilmsFilteredByGenre, getSimilarForCurrentFilm} from "../../utils/common.js";
import NameSpace from "../name-space.js";
import {getFilms} from "../data/selectors.js";

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
    (films, activeFilm) => {
      return getSimilarForCurrentFilm(films, activeFilm);
    }
);
