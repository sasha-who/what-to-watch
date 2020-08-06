import history from "../../history";
import {HttpStatus, AppRoute} from "../../const";
import {extend} from "../../utils/common";
import {getFilms} from "./selectors";
import {convertFilmFromServer, convertFilmsFromServer} from "../../adapters/films";
import {ActionCreator as AppStateActionCreator} from "../app-state/app-state";
import {convertCommentsFromServer} from "../../adapters/comments";

const initialState = {
  films: [],
  promoFilm: null,
  activeFilmComments: [],
  isFilmsLoaded: false,
  isPromoFilmLoaded: false,
  isCommentsLoaded: false,
  requestStatus: HttpStatus.SUCCESS,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_ACTIVE_FILM_COMMENTS: `LOAD_ACTIVE_FILM_COMMENTS`,
  CHANGE_FILMS_LOAD_STATE: `CHANGE_FILMS_LOAD_STATE`,
  CHANGE_PROMO_FILM_LOAD_STATE: `CHANGE_PROMO_FILM_LOAD_STATE`,
  CHANGE_COMMENTS_LOAD_STATE: `CHANGE_COMMENTS_LOAD_STATE`,
  SET_REQUEST_STATUS: `SET_REQUEST_STATUS`,
  UPDATE_PROMO_FILM: `UPDATE_PROMO_FILM`,
  UPDATE_FILMS: `UPDATE_FILMS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  CHANGE_FAVORITE_FILMS_LOAD_STATE: `CHANGE_FAVORITE_FILMS_LOAD_STATE`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    };
  },
  loadActiveFilmComments: (comments) => {
    return {
      type: ActionType.LOAD_ACTIVE_FILM_COMMENTS,
      payload: comments
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
  changeCommentsLoadState: () => {
    return {
      type: ActionType.CHANGE_COMMENTS_LOAD_STATE
    };
  },
  setRequestStatus: (status) => {
    return {
      type: ActionType.SET_REQUEST_STATUS,
      payload: status
    };
  },
  updatePromoFilm: (film) => {
    return {
      type: ActionType.UPDATE_PROMO_FILM,
      payload: film
    };
  },
  updateFilms: (films) => {
    return {
      type: ActionType.UPDATE_FILMS,
      payload: films
    };
  },
  loadFavoriteFilms: (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    };
  },
  changeFavoriteFilmsLoadState: () => {
    return {
      type: ActionType.CHANGE_FAVORITE_FILMS_LOAD_STATE
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedFilms = convertFilmsFromServer(response.data);

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
        const adaptedFilm = convertFilmFromServer(response.data);

        dispatch(ActionCreator.loadPromoFilm(adaptedFilm));
        dispatch(ActionCreator.changePromoFilmLoadState());
      })
      .catch((error) => {
        dispatch(ActionCreator.setRequestStatus(error.response.status));
        dispatch(ActionCreator.changePromoFilmLoadState());
      });
  },
  loadActiveFilmComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const adaptedComments = convertCommentsFromServer(response.data);

        dispatch(ActionCreator.loadActiveFilmComments(adaptedComments));
        dispatch(ActionCreator.changeCommentsLoadState());
      });
  },
  changeFavoriteStatus: (filmId, status, isPromoFilm) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmId}/${status}`)
      .then((response) => {
        const adaptedFilm = convertFilmFromServer(response.data);

        if (isPromoFilm) {
          dispatch(ActionCreator.updatePromoFilm(adaptedFilm));
        }

        const films = getFilms(getState());
        const updatedFilmIndex = films.findIndex((film) => film.id === filmId);

        films[updatedFilmIndex] = adaptedFilm;
        dispatch(ActionCreator.updateFilms(films));
        dispatch(AppStateActionCreator.setActiveFilm(adaptedFilm));
      })
      .catch((error) => {
        if (error.response.status === HttpStatus.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
        }
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const adaptedFilms = convertFilmsFromServer(response.data);

        dispatch(ActionCreator.loadFavoriteFilms(adaptedFilms));
        dispatch(ActionCreator.changeFavoriteFilmsLoadState());
      })
      .catch((error) => {
        dispatch(ActionCreator.setRequestStatus(error.response.status));
        dispatch(ActionCreator.changeFavoriteFilmsLoadState());
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

    case ActionType.LOAD_ACTIVE_FILM_COMMENTS:
      return extend(state, {
        activeFilmComments: action.payload
      });

    case ActionType.CHANGE_FILMS_LOAD_STATE:
      return extend(state, {
        isFilmsLoaded: true
      });

    case ActionType.CHANGE_PROMO_FILM_LOAD_STATE:
      return extend(state, {
        isPromoFilmLoaded: true
      });

    case ActionType.CHANGE_COMMENTS_LOAD_STATE:
      return extend(state, {
        isCommentsLoaded: true
      });

    case ActionType.SET_REQUEST_STATUS:
      return extend(state, {
        requestStatus: action.payload
      });

    case ActionType.UPDATE_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.UPDATE_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });

    case ActionType.CHANGE_FAVORITE_FILMS_LOAD_STATE:
      return extend(state, {
        isFavoriteFilmsLoaded: true
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
