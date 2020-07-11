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
          onCardClick={() => {}}
          onGenreChange={() => {}}
          filterFilmsByGenre={() => {}}
          resetFilmsCountToShow={() => {}}
          incrementFilmsCountToShow={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
