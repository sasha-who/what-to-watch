import React from "react";
import PropTypes from "prop-types";
import {PREVIEW_DELAY, Screen} from "../../const.js";
import VideoPlayer from "../video-player/video-player.jsx";

export default class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._isCardHovered = false;
  }

  render() {
    const {film, onScreenChange, onActiveFilmChange, onCardHover} = this.props;
    const {title, cover, preview} = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={(evt) => {
          this._isCardHovered = true;
          onCardHover(film, evt.target);
          this._startPlaying();
        }}
        onMouseLeave={() => {
          this._isCardHovered = false;
          this._stopPlaying();
        }}
        onClick={() => {
          onScreenChange(Screen.CARD);
          onActiveFilmChange(film);
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            preview={preview}
            defaultImage={cover}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
          >{title}</a>
        </h3>
      </article>
    );
  }

  _startPlaying() {
    setTimeout(() => {
      if (this._isCardHovered === true) {
        this.setState({
          isPlaying: true
        });
      }
    }, PREVIEW_DELAY);
  }

  _stopPlaying() {
    this.setState({
      isPlaying: false
    });
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};
