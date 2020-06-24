import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../films-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onTitleClick, onCardHover} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => {
          return (
            <FilmCard
              film={film}
              onTitleClick={onTitleClick}
              onCardHover={onCardHover}
              key={film + i}
            />
          );
        })}
      </div>
    );
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
  onCardHover: PropTypes.func.isRequired
};

export default FilmsList;
