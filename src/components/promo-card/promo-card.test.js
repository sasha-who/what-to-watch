import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import PromoCard from "./promo-card.jsx";

it(`PromoCard should render correctly`, () => {
  const tree = renderer
    .create(
        <PromoCard
          promoFilm={films[0]}
          onPlayerStateChange={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
