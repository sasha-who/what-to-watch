import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {INITIAL_FILMS_COUNT} from "../../const.js";
import {GENRES, films} from "../../test-mocks.js";
import Catalog from "./catalog.jsx";

it(`Catalog should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Catalog
            films={films}
            filteredFilms={films}
            currentGenre={GENRES[0]}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            onGenreChange={() => {}}
            onFilmsCountToShowReset={() => {}}
            onFilmsCountToShowIncrement={() => {}}
            loadFilmComments={() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
