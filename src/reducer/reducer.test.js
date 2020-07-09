import {GENRES} from "../test-mocks.js";
import {getFilmsFilteredByGenre} from "../reducer/reducer.js";
import {films} from "../test-mocks.js";
import {reducer, ActionType} from "./reducer.js";

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

it(`Reducer should return filtered films list`, () => {
  expect(reducer({
    currentGenre: GENRES[1],
    films,
    filteredFilms: films
  }, {
    type: ActionType.GET_FILTERED_FILMS
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[1])
  });
});
