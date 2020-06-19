import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, filmTitles} from "../../test-mocks.js";
import Main from "./main.jsx";

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          title={PromoFilmData.TITLE}
          genre={PromoFilmData.GENRE}
          date={PromoFilmData.DATE}
          filmTitles={filmTitles}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
