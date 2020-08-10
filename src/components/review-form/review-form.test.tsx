import * as React from "react";
import * as renderer from "react-test-renderer";
import {CommentPostStatus} from "../../const";
import {films} from "../../test-mocks";
import ReviewForm from "../review-form/review-form";
import {noop} from "../../utils/common";

it(`ReviewForm should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          film={films[0]}
          postReview={noop}
          commentPostStatus={CommentPostStatus.OK}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
