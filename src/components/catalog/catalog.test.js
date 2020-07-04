import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import Catalog from "./catalog.jsx";

it(`Catalog should render correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          films={films}
          onCardClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
