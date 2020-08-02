import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  LoaderData,
  AddToListIcon,
  InListIcon
} from "../../const.js";
import {getFilmFromParameters} from "../../utils/common.js";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import FilmsList from "../films-list/films-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.js";

const TabsWrapped = withActiveTab(Tabs);

class DetailedFilmCard extends React.PureComponent {
  componentDidMount() {
    const {films, loadFilmComments, onActiveFilmChange} = this.props;
    const film = getFilmFromParameters(films, this.props.match.params.id);

    loadFilmComments(film.id);
    onActiveFilmChange(film);
  }

  render() {
    const {
      authorizationStatus,
      authorizationData,
      isCommentsLoaded,
      films,
      similarFilms,
      activeFilmComments,
      onScreenChange,
      onActiveFilmChange,
      loadFilmComments,
      onFavoriteStatusChange
    } = this.props;

    const film = getFilmFromParameters(films, this.props.match.params.id);

    const {
      id,
      title,
      cover,
      poster,
      genre,
      release,
      isFavorite
    } = film;

    if (!isCommentsLoaded) {
      return (
        <div style={LoaderData.STYLE}>
          <Loader
            type={LoaderData.TYPE}
            color={LoaderData.COLOR}
            width={LoaderData.HEIGHT}
            height={LoaderData.WIDTH}
          />
        </div>
      );
    }

    const myListIcon = isFavorite ? InListIcon : AddToListIcon;

    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={cover}
                alt={title}
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header
              additionalClass={`movie-card__head`}
              authorizationData={authorizationData}
              authorizationStatus={authorizationStatus}
              onScreenChange={onScreenChange}
            />
            <div className="movie-card__wrap">
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

                      onFavoriteStatusChange(id, status, false);
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
                  <Link
                    to={`/films/${id}/review`}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={poster}
                  alt={title}
                  width={218}
                  height={327}
                />
              </div>
              <div className="movie-card__desc">
                <TabsWrapped
                  film={film}
                  activeFilmComments={activeFilmComments}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList
              films={similarFilms}
              onScreenChange={onScreenChange}
              onActiveFilmChange={onActiveFilmChange}
              loadFilmComments={loadFilmComments}
            />
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

DetailedFilmCard.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired,
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ).isRequired,
  activeFilmComments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired
      })
  ).isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isPlayerActive: PropTypes.bool.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  loadFilmComments: PropTypes.func.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default DetailedFilmCard;
