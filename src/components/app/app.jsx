import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import history from "../../history.js";
import {LoaderData, HttpStatus, AppRoute} from "../../const.js";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {
  getFilms,
  getPromoFilm,
  getFilmsLoadState,
  getPromoFilmLoadState,
  getRequestStatus,
  getFilmComments,
  getCommentsLoadState
} from "../../reducer/data/selectors.js";
import {
  getActiveScreen,
  getCurrentGenre,
  getFilmsCountToShow,
  getPlayerState,
  getActiveFilm,
  getFilteredFilms,
  getSimilarFilms
} from "../../reducer/app-state/selectors.js";
import {
  getAuthorizationStatus,
  getAuthorizationData,
  getCommentPostStatus
} from "../../reducer/user/selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import Main from "../main/main.jsx";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";
import ServerError from "../server-error/server-error.jsx";
import AuthorizationScreen from "../authorization-screen/authorization-screen.jsx";
import ReviewScreen from "../review-sreen/review-sreen.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import withValidityCheck from "../../hocs/with-validity-check/with-validity-check.js";
import withPlayer from "../../hocs/with-player/with-player.js";

const AuthorizationScreenWrapped = withValidityCheck(AuthorizationScreen);
const PlayerWrapped = withPlayer(Player);

class App extends React.PureComponent {
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
      isPlayerActive,
      isFilmsLoaded,
      isPromoFilmLoaded,
      requestStatus,
      commentPostStatus,
      onScreenChange,
      onActiveFilmChange,
      onGenreChange,
      onFilmsCountToShowReset,
      onFilmsCountToShowIncrement,
      login,
      loadFilmComments,
      postReview,
      onFavoriteStatusChange
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
              isPlayerActive={isPlayerActive}
              onScreenChange={onScreenChange}
              onActiveFilmChange={onActiveFilmChange}
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
                isPlayerActive={isPlayerActive}
                onScreenChange={onScreenChange}
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
              onScreenChange={onScreenChange}
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
                onScreenChange={onScreenChange}
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
                favoriteFilms={films}
                loadFilmComments={loadFilmComments}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewVideo: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewVideo: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ).isRequired,
  activeScreen: PropTypes.string.isRequired,
  activeFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewVideo: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ).isRequired,
  activeFilmComments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired
      })
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  filmsCountToShow: PropTypes.number,
  isPlayerActive: PropTypes.bool.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  isPromoFilmLoaded: PropTypes.bool.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  requestStatus: PropTypes.number.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  loadFilmComments: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
  commentPostStatus: PropTypes.string.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationData: getAuthorizationData(state),
  activeScreen: getActiveScreen(state),
  activeFilm: getActiveFilm(state),
  currentGenre: getCurrentGenre(state),
  films: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  filmsCountToShow: getFilmsCountToShow(state),
  similarFilms: getSimilarFilms(state),
  isPlayerActive: getPlayerState(state),
  promoFilm: getPromoFilm(state),
  activeFilmComments: getFilmComments(state),
  isFilmsLoaded: getFilmsLoadState(state),
  isPromoFilmLoaded: getPromoFilmLoadState(state),
  isCommentsLoaded: getCommentsLoadState(state),
  requestStatus: getRequestStatus(state),
  commentPostStatus: getCommentPostStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authorizationData) {
    dispatch(UserOperation.login(authorizationData));
  },
  loadFilmComments(filmId) {
    dispatch(DataOperation.loadActiveFilmComments(filmId));
  },
  postReview(review, filmId) {
    dispatch(UserOperation.postReview(review, filmId));
  },
  onFavoriteStatusChange(filmId, status, isPromoFilm) {
    dispatch(DataOperation.changeFavoriteStatus(filmId, status, isPromoFilm));
  },
  onScreenChange(screen) {
    dispatch(ActionCreator.changeActiveScreen(screen));
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
