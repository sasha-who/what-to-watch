import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {
  INITIAL_FILMS_COUNT,
  HttpStatus,
  AuthorizationStatus,
  CommentPostStatus
} from "../../const";
import {films, GENRES, userData, comments} from "../../test-mocks";
import {App} from "./app";
import {noop} from "../../utils/common";

const mockStore = configureStore([]);

const store = mockStore({
  authorizationStatus: AuthorizationStatus.AUTHORIZED,
  authorizationData: userData,
  requestStatus: HttpStatus.SUCCESS,
  activeFilm: films[0],
  activeFilmComments: comments,
  currentGenre: GENRES[0],
  films,
  filteredFilms: films,
  filmsCountToShow: INITIAL_FILMS_COUNT,
  isCommentsLoaded: false,
  isFilmsLoaded: false,
  isPromoFilmLoaded: false,
  commentPostStatus: CommentPostStatus.OK,
  loginError: null
});

it(`Main screen should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            activeFilmComments={comments}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isFilmsLoaded={true}
            isPromoFilmLoaded={true}
            isCommentsLoaded={true}
            requestStatus={HttpStatus.SUCCESS}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            onActiveFilmChange={noop}
            onGenreChange={noop}
            onFilmsCountToShowReset={noop}
            onFilmsCountToShowIncrement={noop}
            login={noop}
            loadFilmComments={noop}
            postReview={noop}
            commentPostStatus={CommentPostStatus.OK}
            onFavoriteStatusChange={noop}
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFavoriteFilms={noop}
            loginError={HttpStatus.NOT_FOUND}
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
            activeFilm={films[0]}
            promoFilm={films[0]}
            films={films}
            filteredFilms={films}
            activeFilmComments={comments}
            filmsCountToShow={INITIAL_FILMS_COUNT}
            currentGenre={GENRES[0]}
            similarFilms={films}
            isFilmsLoaded={true}
            isPromoFilmLoaded={true}
            isCommentsLoaded={true}
            requestStatus={HttpStatus.SUCCESS}
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            onActiveFilmChange={noop}
            onGenreChange={noop}
            onFilmsCountToShowReset={noop}
            onFilmsCountToShowIncrement={noop}
            login={noop}
            loadFilmComments={noop}
            postReview={noop}
            commentPostStatus={CommentPostStatus.OK}
            onFavoriteStatusChange={noop}
            favoriteFilms={films}
            isFavoriteFilmsLoaded={true}
            loadFavoriteFilms={noop}
            loginError={HttpStatus.NOT_FOUND}
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
