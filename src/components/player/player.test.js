import React from "react";
import renderer from "react-test-renderer";
import Player from "../player/player.jsx";

it(`Player should render correctly`, () => {
  const tree = renderer
    .create(<Player />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
