import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {INITIAL_FILMS_COUNT, Screen} from "../../const.js";
import {films, GENRES} from "../../test-mocks.js";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const store = mockStore({
  activeScreen: Screen.MAIN,
  activeFilm: films[0],
  currentGenre: GENRES[0],
  films,
  filteredFilms: films,
  filmsCountToShow: INITIAL_FILMS_COUNT,
  isPlayerActive: false
});

it(`Main screen should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeScreen={Screen.MAIN}
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isPlayerActive={false}
            onScreenChange={() => {}}
            onActiveFilmChange={() => {}}
            onGenreChange={() => {}}
            onFilmsCountToShowReset={() => {}}
            onFilmsCountToShowIncrement={() => {}}
            onPlayerStateChange={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Card screen should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeScreen={Screen.CARD}
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isPlayerActive={false}
            onScreenChange={() => {}}
            onActiveFilmChange={() => {}}
            onGenreChange={() => {}}
            onFilmsCountToShowReset={() => {}}
            onFilmsCountToShowIncrement={() => {}}
            onPlayerStateChange={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
