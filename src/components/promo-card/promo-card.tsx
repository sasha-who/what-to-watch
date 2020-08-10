import * as React from "react";
import {Link} from "react-router-dom";
import {InListIcon, AddToListIcon} from "../../const";
import {Film} from "../../types";

interface Props {
  promoFilm: Film;
  onFavoriteStatusChange: (id: number, status: number, isPromoFilm: boolean) => void;
}

const PromoCard: React.FunctionComponent<Props> = (props: Props) => {
  const {promoFilm, onFavoriteStatusChange} = props;
  const {id, title, genre, release, isFavorite} = promoFilm;
  const myListIcon = isFavorite ? InListIcon : AddToListIcon;

  return (
    <React.Fragment>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width={218}
              height={327}
            />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{release}</span>
            </p>
            <div className="movie-card__buttons">
              <Link
                className="btn btn--play movie-card__button"
                to={`/player/${id}`}
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={() => {
                  const status = isFavorite ? 0 : 1;

                  onFavoriteStatusChange(id, status, true);
                }}
              >
                <svg
                  viewBox={`0 0 ${myListIcon.WIDTH} ${myListIcon.HEIGHT}`}
                  width={myListIcon.WIDTH}
                  height={myListIcon.HEIGHT}
                >
                  <use xlinkHref={`#${myListIcon.ID}`} />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PromoCard;
