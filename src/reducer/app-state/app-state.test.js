import {INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT, Screen} from "../../const.js";
import {GENRES} from "../../test-mocks.js";
import {reducer, ActionType, ActionCreator} from "./app-state.js";

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[1],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  });

  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT + 1,
    isPlayerActive: false
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  });
});

it(`Reducer should increment films count to show`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  }, {
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT + ADDITIONAL_FILMS_COUNT,
    isPlayerActive: false
  });
});

it(`Reducer should change player state`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: false
  }, {
    type: ActionType.CHANGE_PLAYER_STATE
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    filteredFilms: [],
    filmsCountToShow: INITIAL_FILMS_COUNT,
    isPlayerActive: true
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

  it(`Action creator for changing player state returns correct action`, () => {
    expect(ActionCreator.changePlayerState()).toEqual({
      type: ActionType.CHANGE_PLAYER_STATE
    });
  });
});
