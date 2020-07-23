import {extend} from "../../utils/common.js";
import {films} from "../../mocks/films.js";

const initialState = {
  films,
  promoFilm: films[0]
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

export {reducer, ActionType, ActionCreator};
