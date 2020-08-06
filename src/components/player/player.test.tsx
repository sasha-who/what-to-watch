import * as React from "react";
import * as renderer from "react-test-renderer";
import {films} from "../../test-mocks";
import Player from "../player/player";
import {noop} from "../../utils/common";

it(`Player should render correctly`, () => {
  const tree = renderer.create(
      <Player
        film={films[0]}
        isPlaying={true}
        progress={0}
        onPlayButtonClick={noop}
        onFullScreenButtonClick={noop}
      >
        <video />
      </Player>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
