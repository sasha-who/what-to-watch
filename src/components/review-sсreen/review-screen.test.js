import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus, CommentPostStatus} from "../../const.js";
import {films, userData} from "../../test-mocks.js";
import ReviewScreen from "./review-sсreen.jsx.js";

it(`ReviewScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <ReviewScreen
            match={{params: {id: 1}, isExact: true, path: ``, url: ``}}
            films={films}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            postReview={() => {}}
            commentPostStatus={CommentPostStatus.OK}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
