import {extend} from "../../utils/common.js";
import {adaptFilmfromServer, adaptFilmsfromServer} from "../../adapters/films.js";

const initialState = {
  films: [],
  promoFilm: null
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
};

const ActionCreator = {
  loadFilms: (allFilms) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: allFilms,
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedFilms = adaptFilmsfromServer(response.data);

        dispatch(ActionCreator.loadFilms(adaptedFilms));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const adaptedFilm = adaptFilmfromServer(response.data);

        dispatch(ActionCreator.loadPromoFilm(adaptedFilm));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
