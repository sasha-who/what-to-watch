import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {INITIAL_FILMS_COUNT, AuthorizationStatus} from "../../const";
import {films, GENRES, userData} from "../../test-mocks";
import Main from "./main";
import {noop} from "../../utils/common";

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Main
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            films={films}
            promoFilm={films[0]}
            currentGenre={GENRES[0]}
            filteredFilms={films}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            onGenreChange={noop}
            onFilmsCountToShowReset={noop}
            onFilmsCountToShowIncrement={noop}
            loadFilmComments={noop}
            onFavoriteStatusChange={noop}
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
