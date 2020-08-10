import {INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT} from "../../const";
import {films, GENRES} from "../../test-mocks";
import {reducer, ActionType, ActionCreator} from "./app-state";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    currentGenre: GENRES[1],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  });

  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT + 1
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should increment films count to show`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT + ADDITIONAL_FILMS_COUNT
  });
});

it(`Reducer should set active film`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.SET_ACTIVE_FILM,
    payload: films[0]
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    activeFilm: films[0]
  });
});

it(`Reducer should filter films by genre`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: films
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should set similar films`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.SET_SIMILAR_FILMS,
    payload: films
  })).toEqual({
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    similarFilms: films
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeCurrentGenre(GENRES[1])).toEqual({
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: GENRES[1]
    });
  });

  it(`Action creator for reseting films count to show returns correct action`, () => {
    expect(ActionCreator.resetFilmsCountToShow()).toEqual({
      type: ActionType.RESET_FILMS_COUNT_TO_SHOW
    });
  });

  it(`Action creator for incrementing films count to show returns correct action`, () => {
    expect(ActionCreator.incrementFilmsCountToShow()).toEqual({
      type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
    });
  });

  it(`Action creator for setting active film returns correct action`, () => {
    expect(ActionCreator.setActiveFilm(films[0])).toEqual({
      type: ActionType.SET_ACTIVE_FILM,
      payload: films[0]
    });
  });

  it(`Action creator for filtering films by genre returns correct action`, () => {
    expect(ActionCreator.filterFilmsByGenre(films)).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: films
    });
  });

  it(`Action creator for setting similar films returns correct action`, () => {
    expect(ActionCreator.setSimilarFilms(films)).toEqual({
      type: ActionType.SET_SIMILAR_FILMS,
      payload: films
    });
  });
});
