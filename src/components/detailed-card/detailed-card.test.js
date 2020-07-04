import React from "react";
import renderer from "react-test-renderer";
import {RECOMENDED_FILMS_COUNT, films} from "../../test-mocks.js";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

const [film] = films;
const recomendedFilms = films.slice(0, RECOMENDED_FILMS_COUNT);

it(`DetailedFilmCard should render correctly`, () => {
  const tree = renderer
    .create(
        <DetailedFilmCard
          film={film}
          recomendedFilms={recomendedFilms}
          onCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
