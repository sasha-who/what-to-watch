import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {Screen} from "../../const.js";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {
  getActiveScreen,
  getCurrentGenre,
  getFilmsCountToShow,
  getPlayerState,
  getActiveFilm,
  getFilteredFilms,
  getSimilarFilms
} from "../../reducer/app-state/selectors.js";
import Main from "../main/main.jsx";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

class App extends React.PureComponent {
  render() {
    const {
      similarFilms,
      activeFilm,
      isPlayerActive,
      onScreenChange,
      onActiveFilmChange,
      onPlayerStateChange
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/film-card">
            <DetailedFilmCard
              film={activeFilm}
              similarFilms={similarFilms}
              isPlayerActive={isPlayerActive}
              onScreenChange={onScreenChange}
              onActiveFilmChange={onActiveFilmChange}
              onPlayerStateChange={onPlayerStateChange}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderScreen() {
    const {
      activeScreen,
      activeFilm,
      promoFilm,
      films,
      currentGenre,
      filteredFilms,
      filmsCountToShow,
      similarFilms,
      isPlayerActive,
      onScreenChange,
      onActiveFilmChange,
      onGenreChange,
      onFilmsCountToShowReset,
      onFilmsCountToShowIncrement,
      onPlayerStateChange
    } = this.props;

    switch (activeScreen) {
      case Screen.MAIN:
        return (
          <Main
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
            onPlayerStateChange={onPlayerStateChange}
          />
        );

      case Screen.CARD:
        return (
          <DetailedFilmCard
            film={activeFilm}
            similarFilms={similarFilms}
            isPlayerActive={isPlayerActive}
            onScreenChange={onScreenChange}
            onActiveFilmChange={onActiveFilmChange}
            onPlayerStateChange={onPlayerStateChange}
          />
        );

      default:
        return null;
    }
  }
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          userName: PropTypes.string.isRequired,
          date: PropTypes.instanceOf(Date).isRequired
        })
    ).isRequired
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              userName: PropTypes.string.isRequired,
              date: PropTypes.instanceOf(Date).isRequired
            })
        ).isRequired
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              userName: PropTypes.string.isRequired,
              date: PropTypes.instanceOf(Date).isRequired
            })
        ).isRequired
      })
  ).isRequired,
  activeScreen: PropTypes.string.isRequired,
  activeFilm: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          userName: PropTypes.string.isRequired,
          date: PropTypes.instanceOf(Date).isRequired
        })
    ).isRequired
  }).isRequired,
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired,
              rating: PropTypes.number.isRequired,
              userName: PropTypes.string.isRequired,
              date: PropTypes.instanceOf(Date).isRequired
            })
        ).isRequired
      })
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  filmsCountToShow: PropTypes.number,
  isPlayerActive: PropTypes.bool.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  onPlayerStateChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeScreen: getActiveScreen(state),
  activeFilm: getActiveFilm(state),
  currentGenre: getCurrentGenre(state),
  films: getFilms(state),
  filteredFilms: getFilteredFilms(state),
  filmsCountToShow: getFilmsCountToShow(state),
  similarFilms: getSimilarFilms(state),
  isPlayerActive: getPlayerState(state),
  promoFilm: getPromoFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
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
  },
  onPlayerStateChange() {
    dispatch(ActionCreator.changePlayerState());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
