import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus, CommentPostStatus} from "../../const";
import {films, userData} from "../../test-mocks";
import ReviewScreen from "./review-screen";
import {noop} from "../../utils/common";

it(`ReviewScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <ReviewScreen
            match={{params: {id: `1`}, isExact: true, path: ``, url: ``}}
            location={history.location}
            history={history.history}
            films={films}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            postReview={noop}
            commentPostStatus={CommentPostStatus.OK}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
