import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

const [film] = films;

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <DetailedFilmCard
          film={film}
          similarFilms={films}
          isPlayerActive={false}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onSimilarFilmsUpdate={() => {}}
          onPlayerStateChange={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Player in film card should render correctly`, () => {
  const tree = renderer
    .create(
        <DetailedFilmCard
          film={film}
          similarFilms={films}
          isPlayerActive={true}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onSimilarFilmsUpdate={() => {}}
          onPlayerStateChange={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
