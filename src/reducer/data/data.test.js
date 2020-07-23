import {films} from "../../test-mocks.js";
import {reducer, ActionType, ActionCreator} from "./data.js";

const [film] = films;

it(`Reducer should load all films`, () => {
  expect(reducer({
    films: [],
    promoFilm: null
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })).toEqual({
    films,
    promoFilm: null
  });
});

it(`Reducer should load promo film`, () => {
  expect(reducer({
    films: [],
    promoFilm: null
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: film
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loading films returns correct action`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films
    });
  });

  it(`Action creator for loading promo film returns correct action`, () => {
    expect(ActionCreator.loadPromoFilm(film)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    });
  });
});
