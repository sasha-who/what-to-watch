import * as React from "react";
import {SECONDS_IN_MINUTE_COUNT, PlayIconStart, PlayIconPause} from "../../const";
import {getRunTimeForPlayer} from "../../utils/common";
import {Film} from "../../types";

interface Props {
  film: Film;
  children?: React.ReactNode;
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
}

const Player: React.FunctionComponent<Props> = (props: Props) => {
  const {
    film,
    children,
    isPlaying,
    isLoading,
    progress,
    onPlayButtonClick,
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
        onClick={() => {
          history.back();
        }}
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
          <button
            type="button"
            className="player__play"
            disabled={isLoading}
            onClick={onPlayButtonClick}
          >
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

export default Player;
