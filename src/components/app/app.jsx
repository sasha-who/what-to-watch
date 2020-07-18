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
      onScreenChange,
      onActiveFilmChange,
      onSimilarFilmsUpdate
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
              onScreenChange={onScreenChange}
              onActiveFilmChange={onActiveFilmChange}
              onSimilarFilmsUpdate={onSimilarFilmsUpdate}
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
      onScreenChange,
      onActiveFilmChange,
      onGenreChange,
      filterFilmsByGenre,
      resetFilmsCountToShow,
      incrementFilmsCountToShow,
      onSimilarFilmsUpdate
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
            onScreenChange={onScreenChange}
            onActiveFilmChange={onActiveFilmChange}
            onGenreChange={onGenreChange}
            filterFilmsByGenre={filterFilmsByGenre}
            resetFilmsCountToShow={resetFilmsCountToShow}
            incrementFilmsCountToShow={incrementFilmsCountToShow}
            onSimilarFilmsUpdate={onSimilarFilmsUpdate}
          />
        );

      case Screen.CARD:
        return (
          <DetailedFilmCard
            film={activeFilm}
            similarFilms={similarFilms}
            onScreenChange={onScreenChange}
            onActiveFilmChange={onActiveFilmChange}
            onSimilarFilmsUpdate={onSimilarFilmsUpdate}
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
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filterFilmsByGenre: PropTypes.func.isRequired,
  resetFilmsCountToShow: PropTypes.func.isRequired,
  incrementFilmsCountToShow: PropTypes.func,
  onSimilarFilmsUpdate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeScreen: state.activeScreen,
  activeFilm: state.activeFilm || state.films[0],
  currentGenre: state.currentGenre,
  films: state.films,
  filteredFilms: state.filteredFilms || [],
  filmsCountToShow: state.filmsCountToShow,
  similarFilms: state.similarFilms || []
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
  filterFilmsByGenre() {
    dispatch(ActionCreator.filterFilmsByGenre());
  },
  resetFilmsCountToShow() {
    dispatch(ActionCreator.resetFilmsCountToShow());
  },
  incrementFilmsCountToShow() {
    dispatch(ActionCreator.incrementFilmsCountToShow());
  },
  onSimilarFilmsUpdate() {
    dispatch(ActionCreator.setSimilarFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
