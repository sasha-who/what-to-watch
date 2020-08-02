import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {films} from "../../test-mocks.js";
import FilmCard from "./film-card.jsx";

const [film] = films;

it(`FilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <FilmCard
            film={film}
            isPlaying={false}
            onScreenChange={() => {}}
            onStartPlaying={() => {}}
            onStopPlaying={() => {}}
            onHoverChange={() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
