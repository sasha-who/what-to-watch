import {INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT, Screen} from "../../const.js";
import {GENRES} from "../../test-mocks.js";
import {reducer, ActionType, ActionCreator} from "./app-state.js";

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
});
