import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../films-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handlerCardHover = this._handlerCardHover.bind(this);
  }

  render() {
    const {films, onTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => {
          return (
            <FilmCard
              film={film}
              onTitleClick={onTitleClick}
              onCardHover={this._handlerCardHover}
              key={film + i}
            />
          );
        })}
      </div>
    );
  }

  _handlerCardHover(film, activeCard) {
    this.setState({
      activeCard
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default FilmsList;
