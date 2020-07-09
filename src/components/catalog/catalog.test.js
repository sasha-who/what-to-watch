import React from "react";
import renderer from "react-test-renderer";
import {GENRES, films} from "../../test-mocks.js";
import Catalog from "./catalog.jsx";

it(`Catalog should render correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          films={films}
          filteredFilms={films}
          currentGenre={GENRES[0]}
          onCardClick={() => {}}
          onGenreChange={() => {}}
          filterFilmsByGenre={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
