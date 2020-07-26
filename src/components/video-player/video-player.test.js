import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {films} from "../../test-mocks.js";

const [film] = films;
const {previewVideo, cover} = film;

it(`VideoPlayer should render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          previewVideo={previewVideo}
          defaultImage={cover}
          isPlaying={false}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
