import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, films, GENRES} from "../../test-mocks.js";
import {App} from "./app.jsx";

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          promoFilmData={PromoFilmData}
          films={films}
          filteredFilms={films}
          currentGenre={GENRES[0]}
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
