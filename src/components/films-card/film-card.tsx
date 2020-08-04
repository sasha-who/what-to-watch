import * as React from "react";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import {Film} from "../../types";

interface Props {
  film: Film;
  isPlaying: boolean;
  onStartPlaying: () => void;
  onStopPlaying: () => void;
  onHoverChange: () => void;
}

const FilmCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    film,
    isPlaying,
    onStartPlaying,
    onStopPlaying,
    onHoverChange
  } = props;

  const {id, title, previewImage, previewVideo} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onHoverChange();
        onStartPlaying();
      }}
      onMouseLeave={() => {
        onHoverChange();
        onStopPlaying();
      }}
    >
      <Link
        className="small-movie-card__image"
        to={`/films/${id}`}
      >
        <VideoPlayer
          previewVideo={previewVideo}
          defaultImage={previewImage}
          isPlaying={isPlaying}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default FilmCard;
