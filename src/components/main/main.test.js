import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, films, GENRES} from "../../test-mocks.js";
import Main from "./main.jsx";

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          films={films}
          promoFilmData={PromoFilmData}
          currentGenre={GENRES[0]}
          filteredFilms={films}
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
