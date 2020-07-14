import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../films-card/film-card.jsx";
import withFilmCard from "../../hocs/with-film-card/with-film-card.js";
import ShowMoreButton from "../show-more/show-more.jsx";

const FilmCardWrapped = withFilmCard(FilmCard);

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    const {
      films,
      filmsCountToShow,
      onScreenChange,
      onActiveFilmChange,
      incrementFilmsCountToShow
    } = this.props;

    const shownFilms = films.slice(0, filmsCountToShow);
    const isAnyFilmsToShow = films.length > filmsCountToShow;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {shownFilms.map((film) => (
            <FilmCardWrapped
              film={film}
              onScreenChange={onScreenChange}
              onActiveFilmChange={onActiveFilmChange}
              onCardHover={this._handleCardHover}
              key={film.id}
            />
          ))}
        </div>
        {isAnyFilmsToShow &&
          <ShowMoreButton
            incrementFilmsCountToShow={incrementFilmsCountToShow}
          />
        }
      </React.Fragment>
    );
  }

  _handleCardHover(activeCard) {
    this.setState({
      activeCard
    });
  }
}

FilmsList.propTypes = {
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
  filmsCountToShow: PropTypes.number,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  incrementFilmsCountToShow: PropTypes.func
};

export default FilmsList;
