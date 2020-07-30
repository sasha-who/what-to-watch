import {GENRES} from "../test-mocks.js";
import {getFilmsFilteredByGenre} from "../reducer/reducer.js";
import {films} from "../test-mocks.js";
import {reducer, ActionType, ActionCreator} from "./reducer.js";

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: films
  });

  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films
  });
});

it(`Reducer should return all films if all films filter was chosen`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films,
    filteredFilms: films
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[0])
  });
});

it(`Reducer should return filtered films list`, () => {
  expect(reducer({
    currentGenre: GENRES[1],
    films,
    filteredFilms: films
  }, {
    type: ActionType.FILTER_FILMS_BY_GENRE
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[1])
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
