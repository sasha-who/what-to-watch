import React from "react";
import renderer from "react-test-renderer";
import {INITIAL_FILMS_COUNT, AuthorizationStatus} from "../../const.js";
import {films, GENRES, userData} from "../../test-mocks.js";
import Main from "./main.jsx";

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          authorizationData={userData}
          films={films}
          promoFilm={films[0]}
          currentGenre={GENRES[0]}
          filteredFilms={films}
          filmsCountToShow={INITIAL_FILMS_COUNT}
          isPlayerActive={false}
          onScreenChange={() => {}}
          onActiveFilmChange={() => {}}
          onGenreChange={() => {}}
          onFilmsCountToShowReset={() => {}}
          onFilmsCountToShowIncrement={() => {}}
          onPlayerStateChange={() => {}}
          loadFilmComments={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
