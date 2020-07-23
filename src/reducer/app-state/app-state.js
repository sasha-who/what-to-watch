import {
  DEFAULT_GENRE,
  INITIAL_FILMS_COUNT,
  ADDITIONAL_FILMS_COUNT,
  Screen
} from "../../const.js";
import {films} from "../../mocks/films.js";
import {extend} from "../../utils/common.js";

const initialState = {
  activeScreen: Screen.MAIN,
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  filmsCountToShow: INITIAL_FILMS_COUNT,
  isPlayerActive: false,
  activeFilm: films[0]
};

const ActionType = {
  CHANGE_ACTIVE_SCREEN: `CHANGE_ACTIVE_SCREEN`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  FILTER_FILMS_BY_GENRE: `FILTER_FILMS_BY_GENRE`,
  RESET_FILMS_COUNT_TO_SHOW: `RESET_FILMS_COUNT_TO_SHOW`,
  INCREMENT_FILMS_COUNT_TO_SHOW: `INCREMENT_FILMS_COUNT_TO_SHOW`,
  SET_SIMILAR_FILMS: `SET_SIMILAR_FILMS`,
  CHANGE_PLAYER_STATE: `CHANGE_PLAYER_STATE`
};

const ActionCreator = {
  changeActiveScreen: (screen) => ({
    type: ActionType.CHANGE_ACTIVE_SCREEN,
    payload: screen
  }),
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film
  }),
  changeCurrentGenre: (genre) => ({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: genre
  }),
  filterFilmsByGenre: (filteredFilms) => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: filteredFilms
  }),
  resetFilmsCountToShow: () => ({
    type: ActionType.RESET_FILMS_COUNT_TO_SHOW
  }),
  incrementFilmsCountToShow: () => ({
    type: ActionType.INCREMENT_FILMS_COUNT_TO_SHOW
  }),
  setSimilarFilms: (similarFilms) => ({
    type: ActionType.SET_SIMILAR_FILMS,
    payload: similarFilms
  }),
  changePlayerState: () => ({
    type: ActionType.CHANGE_PLAYER_STATE
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_SCREEN:
      return extend(state, {
        activeScreen: action.payload || state.activeScreen
      });

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload
      });

    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload || state.currentGenre
      });

    case ActionType.FILTER_FILMS_BY_GENRE:
      return extend(state, {
        filteredFilms: action.payload
      });

    case ActionType.RESET_FILMS_COUNT_TO_SHOW:
      return extend(state, {
        filmsCountToShow: INITIAL_FILMS_COUNT
      });

    case ActionType.INCREMENT_FILMS_COUNT_TO_SHOW:
      return extend(state, {
        filmsCountToShow: state.filmsCountToShow + ADDITIONAL_FILMS_COUNT
      });

    case ActionType.SET_SIMILAR_FILMS:
      return extend(state, {
        similarFilms: action.payload
      });

    case ActionType.CHANGE_PLAYER_STATE:
      return extend(state, {
        isPlayerActive: !state.isPlayerActive
      });
  }

  return state;
};

// const getFilmsFilteredByGenre = (allFilms, genre) => {
//   if (genre === DEFAULT_GENRE) {
//     return allFilms;
//   }

//   return allFilms.filter((film) => film.genre === genre);
// };

// const getSimilarFilms = (allFilms, currentFilm) => {
//   return (
//     allFilms.filter((film) => (film !== currentFilm) && (film.genre === currentFilm.genre))
//       .slice(0, RECOMENDED_FILMS_COUNT)
//   );
// };

export {reducer, ActionType, ActionCreator};
