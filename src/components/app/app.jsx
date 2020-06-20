import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({title, genre, date, filmTitles, onTitleClick}) => (
  <Main
    title={title}
    genre={genre}
    date={date}
    filmTitles={filmTitles}
    onTitleClick={onTitleClick}
  />
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
