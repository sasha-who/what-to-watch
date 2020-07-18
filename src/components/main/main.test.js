import React from "react";
import renderer from "react-test-renderer";
import {INITIAL_FILMS_COUNT} from "../../const.js";
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
          filmsCountToShow={INITIAL_FILMS_COUNT}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onGenreChange={() => {}}
          filterFilmsByGenre={() => {}}
          resetFilmsCountToShow={() => {}}
          incrementFilmsCountToShow={() => {}}
          onSimilarFilmsUpdate={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
