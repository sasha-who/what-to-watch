import React from "react";
import renderer from "react-test-renderer";
import {AuthorizationStatus, CommentPostStatus} from "../../const.js";
import {films, userData} from "../../test-mocks.js";
import ReviewScreen from "../review-sreen/review-sreen.jsx";

it(`ReviewScreen should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewScreen
          film={films[0]}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          authorizationData={userData}
          onScreenChange={() => {}}
          postReview={() => {}}
          commentPostStatus={CommentPostStatus.OK}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
