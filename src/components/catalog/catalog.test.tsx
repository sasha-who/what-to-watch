import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {INITIAL_FILMS_COUNT} from "../../const";
import {GENRES, films} from "../../test-mocks";
import Catalog from "./catalog";
import {noop} from "../../utils/common";

it(`Catalog should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Catalog
            films={films}
            filteredFilms={films}
            currentGenre={GENRES[0]}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            onGenreChange={noop}
            onFilmsCountToShowReset={noop}
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
