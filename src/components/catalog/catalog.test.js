import React from "react";
import renderer from "react-test-renderer";
import {INITIAL_FILMS_COUNT} from "../../const.js";
import {GENRES, films} from "../../test-mocks.js";
import Catalog from "./catalog.jsx";

it(`Catalog should render correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          films={films}
          filteredFilms={films}
          currentGenre={GENRES[0]}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onGenreChange={() => {}}
          onFilmsCountToShowReset={() => {}}
          onFilmsCountToShowIncrement={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
