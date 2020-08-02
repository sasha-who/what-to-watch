import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {
  INITIAL_FILMS_COUNT,
  Screen,
  HttpStatus,
  AuthorizationStatus,
  CommentPostStatus
} from "../../const.js";
import {films, GENRES, userData, comments} from "../../test-mocks.js";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

const store = mockStore({
  authorizationStatus: AuthorizationStatus.AUTHORIZED,
  authorizationData: userData,
  requestStatus: HttpStatus.SUCCESS,
  activeScreen: Screen.MAIN,
  activeFilm: films[0],
  activeFilmComments: comments,
  currentGenre: GENRES[0],
  films,
  filteredFilms: films,
  filmsCountToShow: INITIAL_FILMS_COUNT,
  isPlayerActive: false,
  isCommentsLoaded: false,
  isFilmsLoaded: false,
  isPromoFilmLoaded: false,
  commentPostStatus: CommentPostStatus.OK
});

it(`Main screen should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeScreen={Screen.MAIN}
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            activeFilmComments={comments}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isPlayerActive={false}
            isFilmsLoaded={true}
            isPromoFilmLoaded={true}
            isCommentsLoaded={true}
            requestStatus={HttpStatus.SUCCESS}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            onScreenChange={() => {}}
            onActiveFilmChange={() => {}}
            onGenreChange={() => {}}
            onFilmsCountToShowReset={() => {}}
            onFilmsCountToShowIncrement={() => {}}
            login={() => {}}
            loadFilmComments={() => {}}
            postReview={() => {}}
            commentPostStatus={CommentPostStatus.OK}
            onFavoriteStatusChange={() => {}}
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFavoriteFilms={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Card screen should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeScreen={Screen.CARD}
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            activeFilmComments={comments}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isPlayerActive={false}
            isFilmsLoaded={true}
            isPromoFilmLoaded={true}
            isCommentsLoaded={true}
            requestStatus={HttpStatus.SUCCESS}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            onScreenChange={() => {}}
            onActiveFilmChange={() => {}}
            onGenreChange={() => {}}
            onFilmsCountToShowReset={() => {}}
            onFilmsCountToShowIncrement={() => {}}
            login={() => {}}
            loadFilmComments={() => {}}
            postReview={() => {}}
            commentPostStatus={CommentPostStatus.OK}
            onFavoriteStatusChange={() => {}}
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFavoriteFilms={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
