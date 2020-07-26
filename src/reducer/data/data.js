import {HttpStatus} from "../../const.js";
import {extend} from "../../utils/common.js";
import {adaptFilmfromServer, adaptFilmsfromServer} from "../../adapters/films.js";

const initialState = {
  films: [],
  promoFilm: null,
  isFilmsLoaded: false,
  isPromoFilmLoaded: false,
  requestStatus: HttpStatus.SUCCESS
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_FILMS_LOAD_STATE: `CHANGE_FILMS_LOAD_STATE`,
  CHANGE_PROMO_FILM_LOAD_STATE: `CHANGE_PROMO_FILM_LOAD_STATE`,
  SET_REQUEST_STATUS: `SET_REQUEST_STATUS`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };
  },
  changeFilmsLoadState: () => {
    return {
      type: ActionType.CHANGE_FILMS_LOAD_STATE
    };
  },
  changePromoFilmLoadState: () => {
    return {
      type: ActionType.CHANGE_PROMO_FILM_LOAD_STATE
    };
  },
  setRequestStatus: (status) => {
    return {
      type: ActionType.SET_REQUEST_STATUS,
      payload: status
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedFilms = adaptFilmsfromServer(response.data);

        dispatch(ActionCreator.loadFilms(adaptedFilms));
        dispatch(ActionCreator.changeFilmsLoadState());
      })
      .catch((error) => {
        dispatch(ActionCreator.setRequestStatus(error.response.status));
        dispatch(ActionCreator.changeFilmsLoadState());
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const adaptedFilm = adaptFilmfromServer(response.data);

        dispatch(ActionCreator.loadPromoFilm(adaptedFilm));
        dispatch(ActionCreator.changePromoFilmLoadState());
      })
      .catch((error) => {
        dispatch(ActionCreator.setRequestStatus(error.response.status));
        dispatch(ActionCreator.changePromoFilmLoadState());
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

    case ActionType.CHANGE_FILMS_LOAD_STATE:
      return extend(state, {
        isFilmsLoaded: true
      });

    case ActionType.CHANGE_PROMO_FILM_LOAD_STATE:
      return extend(state, {
        isPromoFilmLoaded: true
      });

    case ActionType.SET_REQUEST_STATUS:
      return extend(state, {
        requestStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
