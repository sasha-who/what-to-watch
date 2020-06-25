import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({title, genre, date, films, onTitleClick}) => (
  <Main
    title={title}
    genre={genre}
    date={date}
    films={films}
    onTitleClick={onTitleClick}
  />
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
