import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {films} from "../../test-mocks";
import PromoCard from "./promo-card";
import {noop} from "../../utils/common";

it(`PromoCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PromoCard
            promoFilm={films[0]}
            onFavoriteStatusChange={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
