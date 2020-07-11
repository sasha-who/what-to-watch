import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {INITIAL_FILMS_COUNT} from "../../const.js";
import {PromoFilmData, films, GENRES} from "../../test-mocks.js";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const store = mockStore({
  currentGenre: GENRES[0],
  films,
  filteredFilms: films,
  filmsCountToShow: INITIAL_FILMS_COUNT
});

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            promoFilmData={PromoFilmData}
            films={films}
            filteredFilms={films}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            onGenreChange={() => {}}
            filterFilmsByGenre={() => {}}
            resetFilmsCountToShow={() => {}}
            incrementFilmsCountToShow={() => {}}
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
