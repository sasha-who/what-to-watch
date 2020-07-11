import React from "react";
import renderer from "react-test-renderer";
import {INITIAL_FILMS_COUNT} from "../../const.js";
import {films} from "../../test-mocks.js";
import FilmsList from "./films-list.jsx";

it(`FilmsList should render correctly`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          onCardClick={() => {}}
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
