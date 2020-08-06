import * as React from "react";
import {Switch, Route, Router, Link} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import history from "../../history";
import {LoaderData, HttpStatus, AppRoute} from "../../const";
import {ActionCreator} from "../../reducer/app-state/app-state";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import {
  getFilms,
  getPromoFilm,
  getFilmsLoadState,
  getPromoFilmLoadState,
  getRequestStatus,
  getFilmComments,
  getCommentsLoadState,
  getFavoriteFilms,
  getFavoriteFilmsLoadState
} from "../../reducer/data/selectors";
import {
  getCurrentGenre,
  getFilmsCountToShow,
  getActiveFilm,
  getFilteredFilms,
  getSimilarFilms
} from "../../reducer/app-state/selectors";
import {
  getAuthorizationStatus,
  getAuthorizationData,
  getCommentPostStatus,
  getLoginError
} from "../../reducer/user/selectors";
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import DetailedFilmCard from "../detailed-card/detailed-card";
import ServerError from "../server-error/server-error";
import AuthorizationScreen from "../authorization-screen/authorization-screen";
import ReviewScreen from "../review-screen/review-screen";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import withValidityCheck from "../../hocs/with-validity-check/with-validity-check";
import withPlayer from "../../hocs/with-player/with-player";
import {AuthorizationData, Film, Comment} from "../../types";

interface Props {
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  promoFilm: Film;
  films: Film[];
  filteredFilms: Film[];
  activeFilm: Film;
  similarFilms: Film[];
  favoriteFilms: Film[];
  activeFilmComments: Comment[];
  currentGenre: string;
  filmsCountToShow?: number;
  isFilmsLoaded: boolean;
  isPromoFilmLoaded: boolean;
  isCommentsLoaded: boolean;
  requestStatus: number;
  isFavoriteFilmsLoaded: boolean;
  loginError?: number;
  login: () => void;
  onActiveFilmChange: () => void;
  onGenreChange: () => void;
  onFilmsCountToShowReset: () => void;
  onFilmsCountToShowIncrement?: () => void;
  loadFilmComments: () => void;
  postReview: () => void;
  commentPostStatus: () => void;
  onFavoriteStatusChange: () => void;
  loadFavoriteFilms: () => void;
}

const AuthorizationScreenWrapped = withValidityCheck(AuthorizationScreen);
const PlayerWrapped = withPlayer(Player);

class App extends React.PureComponent<Props, null> {
  render() {
    const {
      authorizationStatus,
      authorizationData,
      isCommentsLoaded,
      films,
      promoFilm,
      filteredFilms,
      similarFilms,
      activeFilmComments,
      currentGenre,
      filmsCountToShow,
      isFilmsLoaded,
      isPromoFilmLoaded,
      requestStatus,
      favoriteFilms,
      isFavoriteFilmsLoaded,
      loginError,
      commentPostStatus,
      onActiveFilmChange,
      onGenreChange,
      onFilmsCountToShowReset,
      onFilmsCountToShowIncrement,
      login,
      loadFilmComments,
      postReview,
      onFavoriteStatusChange,
      loadFavoriteFilms
    } = this.props;

    if (!isFilmsLoaded || !isPromoFilmLoaded) {
      return (
        <div style={LoaderData.STYLE}>
          <Loader
            type={LoaderData.TYPE}
            color={LoaderData.COLOR}
            width={LoaderData.HEIGHT}
            height={LoaderData.WIDTH}
          />
        </div>
      );
    }

    if (!(requestStatus >= HttpStatus.SUCCESS && requestStatus < HttpStatus.REDIRECT)) {
      return <ServerError requestStatus={requestStatus} />;
    }

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
              authorizationStatus={authorizationStatus}
              authorizationData={authorizationData}
              films={films}
              promoFilm={promoFilm}
              currentGenre={currentGenre}
              filteredFilms={filteredFilms}
              filmsCountToShow={filmsCountToShow}
              onGenreChange={onGenreChange}
              onFilmsCountToShowReset={onFilmsCountToShowReset}
              onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
              loadFilmComments={loadFilmComments}
              onFavoriteStatusChange={onFavoriteStatusChange}
            />
          </Route>
          <Route exact path={AppRoute.FILM}
            render={(props) => (
              <DetailedFilmCard
                {...props}
                authorizationStatus={authorizationStatus}
                authorizationData={authorizationData}
                isCommentsLoaded={isCommentsLoaded}
                films={films}
                similarFilms={similarFilms}
                activeFilmComments={activeFilmComments}
                onActiveFilmChange={onActiveFilmChange}
                loadFilmComments={loadFilmComments}
                onFavoriteStatusChange={onFavoriteStatusChange}
              />
            )}
          />
          <Route exact path={AppRoute.LOGIN}>
            <AuthorizationScreenWrapped
              authorizationStatus={authorizationStatus}
              onAuthorizationFormSubmit={login}
              loginError={loginError}
            />
          </Route>
          <Route
            exact
            path={AppRoute.PLAYER}
            render={(props) => (
              <PlayerWrapped
                {...props}
                films={films}
              />
            )}
          />
          <PrivateRoute
            exact
            path={AppRoute.REVIEW}
            render={(props) => (
              <ReviewScreen
                {...props}
                films={films}
                authorizationData={authorizationData}
                authorizationStatus={authorizationStatus}
                postReview={postReview}
                commentPostStatus={commentPostStatus}
              />
            )}
          />
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={(props) => (
              <MyList
                {...props}
                favoriteFilms={favoriteFilms}
                isFavoriteFilmsLoaded={isFavoriteFilmsLoaded}
                loadFilmComments={loadFilmComments}
                loadFavoriteFilms={loadFavoriteFilms}
                authorizationData={authorizationData}
                authorizationStatus={authorizationStatus}
              />
            )}
          />
          <Route
            render={() => (
              <React.Fragment>
                <h1>
                  Error: 404. Page not found.
                </h1>
                <Link to={AppRoute.ROOT}>Go to main page</Link>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationData: getAuthorizationData(state),
  activeFilm: getActiveFilm(state),
  currentGenre: getCurrentGenre(state),
  films: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  filmsCountToShow: getFilmsCountToShow(state),
  similarFilms: getSimilarFilms(state),
  promoFilm: getPromoFilm(state),
  activeFilmComments: getFilmComments(state),
  isFilmsLoaded: getFilmsLoadState(state),
  isPromoFilmLoaded: getPromoFilmLoadState(state),
  isCommentsLoaded: getCommentsLoadState(state),
  requestStatus: getRequestStatus(state),
  commentPostStatus: getCommentPostStatus(state),
  favoriteFilms: getFavoriteFilms(state),
  isFavoriteFilmsLoaded: getFavoriteFilmsLoadState(state),
  loginError: getLoginError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authorizationData) {
    dispatch(UserOperation.login(authorizationData));
  },
  loadFilmComments(filmId) {
    dispatch(DataOperation.loadActiveFilmComments(filmId));
  },
  loadFavoriteFilms() {
    dispatch(DataOperation.loadFavoriteFilms());
  },
  postReview(review, filmId) {
    dispatch(UserOperation.postReview(review, filmId));
  },
  onFavoriteStatusChange(filmId, status, isPromoFilm) {
    dispatch(DataOperation.changeFavoriteStatus(filmId, status, isPromoFilm));
  },
  onActiveFilmChange(film) {
    dispatch(ActionCreator.setActiveFilm(film));
  },
  onGenreChange(genre) {
    dispatch(ActionCreator.changeCurrentGenre(genre));
  },
  onFilmsCountToShowReset() {
    dispatch(ActionCreator.resetFilmsCountToShow());
  },
  onFilmsCountToShowIncrement() {
    dispatch(ActionCreator.incrementFilmsCountToShow());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
