import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {INITIAL_FILMS_COUNT} from "../../const";
import {films} from "../../test-mocks";
import FilmsList from "./films-list";
import {noop} from "../../utils/common";

it(`FilmsList should render correctly with show more button`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <FilmsList
            films={films}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            onFilmsCountToShowIncrement={noop}
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

it(`FilmsList should render correctly without show more button`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <FilmsList
            films={films.slice(0, INITIAL_FILMS_COUNT - 1)}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            onFilmsCountToShowIncrement={noop}
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
