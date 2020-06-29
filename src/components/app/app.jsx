import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailedFilmCard from "../detailed-card/detailed-card.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    const [film] = films;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/film-card">
            <DetailedFilmCard film={film}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {promoFilmData, films, onTitleClick} = this.props;

    return (
      <Main
        promoFilmData={promoFilmData}
        films={films}
        onTitleClick={onTitleClick}
      />
    );
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
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        release: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingsCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string)
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
