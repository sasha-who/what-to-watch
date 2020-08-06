import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {films} from "../../test-mocks";
import FilmCard from "./film-card";
import {noop} from "../../utils/common";

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
            onStartPlaying={noop}
            onStopPlaying={noop}
            onHoverChange={noop}
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
