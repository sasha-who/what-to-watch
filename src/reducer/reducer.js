import {DEFAULT_GENRE, INITIAL_FILMS_COUNT, ADDITIONAL_FILMS_COUNT} from "../const.js";
import {extend} from "../utils/common.js";
import {films} from "../mocks/films.js";

const initialState = {
  currentGenre: DEFAULT_GENRE,
  films,
  filteredFilms: films,
  filmsCountToShow: INITIAL_FILMS_COUNT
};

const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  RESET_FILMS_COUNT_TO_SHOW: `RESET_FILMS_COUNT_TO_SHOW`,
  INCREMENT_FILMS_COUNT_TO_SHOW: `INCREMENT_FILMS_COUNT_TO_SHOW`
};

const ActionCreator = {
  changeCurrentGenre: (genre) => ({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: genre
  }),
  filterFilmsByGenre: () => ({
    type: ActionType.FILTER_FILMS_BY_GENRE
  }),
  resetFilmsCountToShow: () => ({
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  }),
  incrementFilmsCountToShow: () => ({
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload || state.currentGenre
      });

    case ActionType.FILTER_FILMS_BY_GENRE:
      const filteredFilms = state.currentGenre === DEFAULT_GENRE ?
        state.films :
        getFilmsFilteredByGenre(state.films, state.currentGenre);

      return extend(state, {filteredFilms});

    case ActionType.RESET_FILMS_COUNT_TO_SHOW:
      return extend(state, {
        filmsCountToShow: INITIAL_FILMS_COUNT
      });

    case ActionType.INCREMENT_FILMS_COUNT_TO_SHOW:
      return extend(state, {
        filmsCountToShow: state.filmsCountToShow + ADDITIONAL_FILMS_COUNT
      });
  }

  return state;
};

const getFilmsFilteredByGenre = (allFilms, genre) => {
  if (genre === DEFAULT_GENRE) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre === genre);
};

export {reducer, ActionType, ActionCreator, getFilmsFilteredByGenre};
