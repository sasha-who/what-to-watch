import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {RECOMENDED_FILMS_COUNT, Screen} from "../../const.js";
import Main from "../main/main.jsx";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeScreen: Screen.MAIN
    };

    this.activeFilm = null;
    this._handlerCardClick = this._handlerCardClick.bind(this);
  }

  render() {
    const {films} = this.props;
    const [film] = films;
    const recomendedFilms = films.slice(0, RECOMENDED_FILMS_COUNT);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/film-card">
            <DetailedFilmCard
              film={film}
              recomendedFilms={recomendedFilms}
              onCardClick={this._handlerCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handlerCardClick(film) {
    this.setState({
      activeScreen: Screen.CARD
    });

    this.activeFilm = film;
  }

  _renderScreen() {
    const {promoFilmData, films} = this.props;
    const {activeScreen} = this.state;
    const recomendedFilms = films.slice(0, RECOMENDED_FILMS_COUNT);

    switch (activeScreen) {
      case Screen.MAIN:
        return (
          <Main
            promoFilmData={promoFilmData}
            films={films}
            onCardClick={this._handlerCardClick}
          />
        );

      case Screen.CARD:
        return (
          <DetailedFilmCard
            film={this.activeFilm}
            recomendedFilms={recomendedFilms}
            onCardClick={this._handlerCardClick}
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
  ).isRequired
};

export default App;
