import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {films} from "../../test-mocks.js";
import PromoCard from "./promo-card.jsx";

it(`PromoCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PromoCard
            promoFilm={films[0]}
            onFavoriteStatusChange={() => {}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
