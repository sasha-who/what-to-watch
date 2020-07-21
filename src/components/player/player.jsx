import React from "react";
import PropTypes from "prop-types";
import {PlayIconStart, PlayIconPause} from "../../const.js";
import {getRunTimeForPlayer} from "../../utils/common.js";

const Player = ({film, children, isPlaying, onPlayButtonClick}) => {
  const {title, runTime} = film;
  const playIcon = isPlaying ? PlayIconPause : PlayIconStart;

  return (
    <div className="player">
      {children}
      <button type="button" className="player__exit">
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={0} max={100} />
            <div className="player__toggler">
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getRunTimeForPlayer(runTime)}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg
              viewBox={`0 0 ${playIcon.WIDTH} ${playIcon.HEIGHT}`}
              width={playIcon.WIDTH}
              height={playIcon.HEIGHT}
            >
              <use xlinkHref={`#${playIcon.ID}`} />
            </svg>
            <span>{playIcon.DESCRIPTION}</span>
          </button>
          <div className="player__name">{title}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
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
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default Player;
