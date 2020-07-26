import MockAdapter from "axios-mock-adapter";
import {HttpStatus} from "../../const.js";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import {films} from "../../test-mocks.js";

const api = createAPI(() => {});
const [film] = films;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  });
});

it(`Reducer should load all films`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })).toEqual({
    films,
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  });
});

it(`Reducer should load promo film`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: film,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  });
});

it(`Reducer should change films load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  }, {
    type: ActionType.CHANGE_FILMS_LOAD_STATE,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: null,
    isFilmsLoaded: true,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  });
});

it(`Reducer should change promo films load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  }, {
    type: ActionType.CHANGE_PROMO_FILM_LOAD_STATE,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: true,
    requestStatus: HttpStatus.SUCCESS
  });
});

it(`Reducer should set response status after request`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: HttpStatus.SUCCESS
  }, {
    type: ActionType.SET_REQUEST_STATUS,
    payload: status
  })).toEqual({
    films: [],
    promoFilm: null,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    requestStatus: status
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

  it(`Action creator for changing films load state returns correct action`, () => {
    expect(ActionCreator.changeFilmsLoadState()).toEqual({
      type: ActionType.CHANGE_FILMS_LOAD_STATE
    });
  });

  it(`Action creator for changing promo film load state returns correct action`, () => {
    expect(ActionCreator.changePromoFilmLoadState()).toEqual({
      type: ActionType.CHANGE_PROMO_FILM_LOAD_STATE
    });
  });

  it(`Action creator for setting request status returns correct action`, () => {
    expect(ActionCreator.setRequestStatus(status)).toEqual({
      type: ActionType.SET_REQUEST_STATUS,
      payload: status
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Operation should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, []);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: []
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FILMS_LOAD_STATE
        });
      });
  });

  it(`Operation should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {});

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_PROMO_FILM_LOAD_STATE
        });
      });
  });
});
