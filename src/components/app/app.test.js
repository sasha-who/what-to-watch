import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, films} from "../../test-mocks.js";
import App from "./app.jsx";

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          promoFilmData={PromoFilmData}
          films={films}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
