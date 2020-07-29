import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "../review-form/review-form.jsx";

it(`ReviewForm should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
