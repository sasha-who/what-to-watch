import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import Player from "../player/player.jsx";

it(`Player should render correctly`, () => {
  const tree = renderer.create(
      <Player
        film={films[0]}
        isPlaying={true}
        progress={0}
        onPlayButtonClick={() => {}}
        onFullScreenButtonClick={() => {}}
      >
        <video />
      </Player>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
