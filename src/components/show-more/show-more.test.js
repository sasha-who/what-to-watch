import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "../show-more/show-more.jsx";

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          incrementFilmsCountToShow={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
