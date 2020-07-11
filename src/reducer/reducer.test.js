import {INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT} from "../const.js";
import {getFilmsFilteredByGenre} from "../reducer/reducer.js";
import {GENRES, films} from "../test-mocks.js";
import {reducer, ActionType, ActionCreator} from "./reducer.js";

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });

  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should return all films if all films filter was chosen`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[0]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should return filtered films list`, () => {
  expect(reducer({
    currentGenre: GENRES[1],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[1]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT + 1
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[0]),
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should reset films count to show`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT + 1
  }, {
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  });
});

it(`Reducer should increment films count to show`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
    filmsCountToShow: INITIAL_FILMS_COUNT
  }, {
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films,
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

  it(`Action creator for filtering films returns correct action`, () => {
    expect(ActionCreator.filterFilmsByGenre()).toEqual({
      type: ActionType.FILTER_FILMS_BY_GENRE
    });
  });
});
