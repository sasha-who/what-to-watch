import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import FilmsList from "./films-list.jsx";

it(`FilmsList should render correctly`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films}
          onCardClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
