import MockAdapter from "axios-mock-adapter";
import {HttpStatus} from "../../const.js";
import {createAPI} from "../../api.js";
import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import {ActionType as AppStateActionType} from "../app-state/app-state.js";
import {films, comments} from "../../test-mocks.js";

const api = createAPI(() => {});
const [film] = films;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: [],
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should load all films`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })).toEqual({
    films,
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should load promo film`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: film,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should load film comments`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.LOAD_ACTIVE_FILM_COMMENTS,
    payload: comments
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: comments,
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should change films load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.CHANGE_FILMS_LOAD_STATE
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: true,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should change promo film load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.CHANGE_PROMO_FILM_LOAD_STATE
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: true,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should change comments load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.CHANGE_COMMENTS_LOAD_STATE
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: true,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should set response status after request`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.SET_REQUEST_STATUS,
    payload: status
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: status,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should update films`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.UPDATE_FILMS,
    payload: films
  })).toEqual({
    films,
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should update promo film`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.UPDATE_PROMO_FILM,
    payload: film
  })).toEqual({
    films: [],
    promoFilm: film,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should load favorite films`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: films,
    isFavoriteFilmsLoaded: false
  });
});

it(`Reducer should change favorite films load state after loading`, () => {
  expect(reducer({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: false
  }, {
    type: ActionType.CHANGE_FAVORITE_FILMS_LOAD_STATE
  })).toEqual({
    films: [],
    promoFilm: null,
    activeFilmComments: {},
    isFilmsLoaded: false,
    isPromoFilmLoaded: false,
    isCommentsLoaded: false,
    requestStatus: HttpStatus.SUCCESS,
    favoriteFilms: [],
    isFavoriteFilmsLoaded: true
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

  it(`Action creator for loading comments returns correct action`, () => {
    expect(ActionCreator.loadActiveFilmComments(comments)).toEqual({
      type: ActionType.LOAD_ACTIVE_FILM_COMMENTS,
      payload: comments
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

  it(`Action creator for changing comments load state returns correct action`, () => {
    expect(ActionCreator.changeCommentsLoadState()).toEqual({
      type: ActionType.CHANGE_COMMENTS_LOAD_STATE
    });
  });

  it(`Action creator for setting request status returns correct action`, () => {
    expect(ActionCreator.setRequestStatus(status)).toEqual({
      type: ActionType.SET_REQUEST_STATUS,
      payload: status
    });
  });

  it(`Action creator for updating films returns correct action`, () => {
    expect(ActionCreator.updateFilms(films)).toEqual({
      type: ActionType.UPDATE_FILMS,
      payload: films
    });
  });

  it(`Action creator for updating promo film returns correct action`, () => {
    expect(ActionCreator.updatePromoFilm(film)).toEqual({
      type: ActionType.UPDATE_PROMO_FILM,
      payload: film
    });
  });

  it(`Action creator for loading favorite films returns correct action`, () => {
    expect(ActionCreator.loadFavoriteFilms(films)).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films
    });
  });

  it(`Action creator for changing favorite films load state returns correct action`, () => {
    expect(ActionCreator.changeFavoriteFilmsLoadState()).toEqual({
      type: ActionType.CHANGE_FAVORITE_FILMS_LOAD_STATE
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

  it(`Operation should make a correct API call to /comments/:id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadActiveFilmComments(films[0].id);

    apiMock
      .onGet(`/comments/0`)
      .reply(200, []);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ACTIVE_FILM_COMMENTS,
          payload: []
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_COMMENTS_LOAD_STATE
        });
      });
  });

  it(`Operation should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operation.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, []);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: []
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FAVORITE_FILMS_LOAD_STATE
        });
      });
  });

  it(`Operation should make a correct API call to /favorite/:film_id/0 with promo film`,
      function () {
        const apiMock = new MockAdapter(api);
        const dispatch = jest.fn();
        const favoriteStatusToogle = Operation.changeFavoriteStatus(films[0].id, 0, true);

        apiMock
          .onPost(`/favorite/0/0`)
          .reply(200, {});

        return favoriteStatusToogle(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(3);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.UPDATE_PROMO_FILM,
              payload: {}
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: ActionType.UPDATE_FILMS,
              payload: []
            });
            expect(dispatch).toHaveBeenNthCalledWith(3, {
              type: AppStateActionType.SET_ACTIVE_FILM,
              payload: {}
            });
          });
      }
  );

  it(`Operation should make a correct API call to /favorite/:film_id/0 with ordinary film`,
      function () {
        const apiMock = new MockAdapter(api);
        const dispatch = jest.fn();
        const favoriteStatusToogle = Operation.changeFavoriteStatus(films[0].id, 0, true);

        apiMock
          .onPost(`/favorite/0/0`)
          .reply(200, {});

        return favoriteStatusToogle(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenNthCalledWith(1, {
              type: ActionType.UPDATE_FILMS,
              payload: []
            });
            expect(dispatch).toHaveBeenNthCalledWith(2, {
              type: AppStateActionType.SET_ACTIVE_FILM,
              payload: {}
            });
          });
      }
  );
});
