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
          isPlayerActive={false}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onGenreChange={() => {}}
          onFilmsFilterByGenre={() => {}}
          onFilmsCountToShowReset={() => {}}
          onFilmsCountToShowIncrement={() => {}}
          onSimilarFilmsUpdate={() => {}}
          onPlayerStateChange={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Player in promo card should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          films={films}
          promoFilmData={PromoFilmData}
          currentGenre={GENRES[0]}
          filteredFilms={films}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          isPlayerActive={true}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onGenreChange={() => {}}
          onFilmsFilterByGenre={() => {}}
          onFilmsCountToShowReset={() => {}}
          onFilmsCountToShowIncrement={() => {}}
          onSimilarFilmsUpdate={() => {}}
          onPlayerStateChange={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
