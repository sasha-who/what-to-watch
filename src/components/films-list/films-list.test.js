import React from "react";
import renderer from "react-test-renderer";
import {INITIAL_FILMS_COUNT} from "../../const.js";
import {films} from "../../test-mocks.js";
import FilmsList from "./films-list.jsx";

it(`FilmsList should render correctly with show more button`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          incrementFilmsCountToShow={() => {}}
          onSimilarFilmsUpdate={() => {}}
          loadFilmComments={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`FilmsList should render correctly without show more button`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films.slice(0, INITIAL_FILMS_COUNT - 1)}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onFilmsCountToShowIncrement={() => {}}
          loadFilmComments={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
