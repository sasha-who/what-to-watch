import {INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT, Screen} from "../const.js";
import {GENRES, films} from "../test-mocks.js";
import {
  reducer,
  ActionType,
  ActionCreator,
  getFilmsFilteredByGenre,
  getSimilarFilms
} from "./reducer.js";

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[1],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });

  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should return all films if all films filter was chosen`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[0]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should return filtered films list`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[1],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[1],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[1]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT + 1
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[0]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT + 1
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should increment films count to show`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT + ADDITIONAL_FILMS_COUNT
  });
});

it(`Reducer should set similar films`, () => {
  expect(reducer({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.SET_SIMILAR_FILMS
  })).toEqual({
    activeScreen: Screen.MAIN,
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT,
    similarFilms: getSimilarFilms(films, films[0])
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeCurrentGenre(GENRES[1])).toEqual({
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload: GENRES[1]
    });
  });

  it(`Action creator for filtering films returns correct action`, () => {
    expect(ActionCreator.filterFilmsByGenre()).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE
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

  it(`Action creator for setting similar films returns correct action`, () => {
    expect(ActionCreator.setSimilarFilms()).toEqual({
      type: ActionType.SET_SIMILAR_FILMS
    });
  });
});
