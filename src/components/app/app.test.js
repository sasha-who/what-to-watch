import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, films} from "../../test-mocks.js";
import App from "./app.jsx";

it(`App should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          title={PromoFilmData.TITLE}
          genre={PromoFilmData.GENRE}
          date={PromoFilmData.DATE}
          films={films}
          onTitleClick={() => {}}
          onCardHover={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
