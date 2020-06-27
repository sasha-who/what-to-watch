import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
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
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
