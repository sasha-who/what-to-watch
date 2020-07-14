import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData, films} from "../../test-mocks.js";
import Main from "./main.jsx";

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          promoFilmData={PromoFilmData}
          films={films}
          onCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
