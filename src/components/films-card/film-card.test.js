import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import FilmCard from "./film-card.jsx";

const [film] = films;

it(`FilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          isPlaying={false}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onStartPlaying={() => {}}
          onStopPlaying={() => {}}
          onHoverChange={() => {}}
          onSimilarFilmsUpdate={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
