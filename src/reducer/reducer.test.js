import {GENRES} from "../const.js";
import {getFilmsFilteredByGenre} from "../utils/common.js";
import {films} from "../test-mocks.js";
import {reducer, ActionType} from "./reducer.js";

it(`Reducer should change current genre by a given value`, () => {
  expect(reducer({
    currentGenre: GENRES[0],
    films
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: GENRES[1],
  })).toEqual({
    currentGenre: GENRES[1],
    films
  });

  expect(reducer({
    currentGenre: GENRES[0],
    films
  }, {
    type: ActionType.CHANGE_CURRENT_GENRE
  })).toEqual({
    currentGenre: GENRES[0],
    films
  });
});

it(`Reducer should return filtered films list`, () => {
  expect(reducer({
    currentGenre: GENRES[1],
    films
  }, {
    type: ActionType.GET_FILTERED_FILMS
  })).toEqual({
    currentGenre: GENRES[1],
    films,
    filteredFilms: getFilmsFilteredByGenre(films, GENRES[1])
  });
});
