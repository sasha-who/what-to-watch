import React from "react";
import PropTypes from "prop-types";
import {SECONDS_IN_MINUTE_COUNT, PlayIconStart, PlayIconPause} from "../../const.js";
import {getRunTimeForPlayer} from "../../utils/common.js";

const Player = (props) => {
  const {
    film,
    children,
    isPlaying,
    progress,
    onPlayButtonClick,
    onPlayerStateChange,
    onFullScreenButtonClick
  } = props;

  const {title, runTime} = film;
  const playIcon = isPlaying ? PlayIconPause : PlayIconStart;
  const progressInMinutes = progress / SECONDS_IN_MINUTE_COUNT;
  const runTimeWithProgress = runTime - progressInMinutes;
  const togglerValue = progressInMinutes * 100 / runTime;

  return (
    <div className="player">
      {children}
      <button
        type="button"
        className="player__exit"
        onClick={onPlayerStateChange}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={togglerValue} max={100} />
            <div className="player__toggler" style={{left: `${togglerValue}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getRunTimeForPlayer(runTimeWithProgress)}</div>
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
          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onPlayerStateChange: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired
};

export default Player;
