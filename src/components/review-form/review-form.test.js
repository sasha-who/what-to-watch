import React from "react";
import renderer from "react-test-renderer";
import {CommentPostStatus} from "../../const.js";
import {films} from "../../test-mocks.js";
import ReviewForm from "../review-form/review-form.jsx";

it(`ReviewForm should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          film={films[0]}
          postReview={() => {}}
          commentPostStatus={CommentPostStatus.OK}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
