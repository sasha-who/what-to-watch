import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({title, genre, date, filmTitles}) => {
  return (
    <Main
      title={title}
      genre={genre}
      date={date}
      filmTitles={filmTitles}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
