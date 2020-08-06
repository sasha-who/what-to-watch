import * as React from "react";
import * as renderer from "react-test-renderer";
import ShowMoreButton from "../show-more/show-more";
import {noop} from "../../utils/common";

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onFilmsCountToShowIncrement={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
