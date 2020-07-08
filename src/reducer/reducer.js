import {GENRES} from "../const.js";
import {extend, getFilmsFilteredByGenre} from "../utils/common.js";
import {films} from "../mocks/films.js";

const initialState = {
  currentGenre: GENRES[0],
  films
};

const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload || state.currentGenre
      });

    case ActionType.GET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: getFilmsFilteredByGenre(state.films, state.currentGenre)
      });
  }

  return state;
};

export {reducer, ActionType};
