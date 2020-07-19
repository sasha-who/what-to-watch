import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {Screen} from "../../const.js";
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
      onSimilarFilmsUpdate,
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
              onSimilarFilmsUpdate={onSimilarFilmsUpdate}
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
      promoFilmData,
      films,
      currentGenre,
      filteredFilms,
      filmsCountToShow,
      similarFilms,
      isPlayerActive,
      onScreenChange,
      onActiveFilmChange,
      onGenreChange,
      onFilmsFilterByGenre,
      onFilmsCountToShowReset,
      onFilmsCountToShowIncrement,
      onSimilarFilmsUpdate,
      onPlayerStateChange
    } = this.props;

    switch (activeScreen) {
      case Screen.MAIN:
        return (
          <Main
            films={films}
            promoFilmData={promoFilmData}
            currentGenre={currentGenre}
            filteredFilms={filteredFilms}
            filmsCountToShow={filmsCountToShow}
            isPlayerActive={isPlayerActive}
            onScreenChange={onScreenChange}
            onActiveFilmChange={onActiveFilmChange}
            onGenreChange={onGenreChange}
            onFilmsFilterByGenre={onFilmsFilterByGenre}
            onFilmsCountToShowReset={onFilmsCountToShowReset}
            onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
            onSimilarFilmsUpdate={onSimilarFilmsUpdate}
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
            onSimilarFilmsUpdate={onSimilarFilmsUpdate}
            onPlayerStateChange={onPlayerStateChange}
          />
        );

      default:
        return null;
    }
  }
}

App.propTypes = {
  promoFilmData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
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
  onFilmsFilterByGenre: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  onSimilarFilmsUpdate: PropTypes.func.isRequired,
  onPlayerStateChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeScreen: state.activeScreen,
  activeFilm: state.activeFilm || state.films[0],
  currentGenre: state.currentGenre,
  films: state.films,
  filteredFilms: state.filteredFilms || [],
  filmsCountToShow: state.filmsCountToShow,
  similarFilms: state.similarFilms || [],
  isPlayerActive: state.isPlayerActive
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
  onFilmsFilterByGenre() {
    dispatch(ActionCreator.filterFilmsByGenre());
  },
  onFilmsCountToShowReset() {
    dispatch(ActionCreator.resetFilmsCountToShow());
  },
  onFilmsCountToShowIncrement() {
    dispatch(ActionCreator.incrementFilmsCountToShow());
  },
  onSimilarFilmsUpdate() {
    dispatch(ActionCreator.setSimilarFilms());
  },
  onPlayerStateChange() {
    dispatch(ActionCreator.changePlayerState());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
