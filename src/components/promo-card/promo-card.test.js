import React from "react";
import renderer from "react-test-renderer";
import {PromoFilmData} from "../../test-mocks.js";
import PromoCard from "./promo-card.jsx";

it(`PromoCard should render correctly`, () => {
  const tree = renderer
    .create(<PromoCard promoFilmData={PromoFilmData} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
