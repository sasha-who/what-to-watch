import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, filmTitles} from "../../test-mocks.js";
import App from "./app.jsx";

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          title={PromoFilmData.TITLE}
          genre={PromoFilmData.GENRE}
          date={PromoFilmData.DATE}
          filmTitles={filmTitles}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
