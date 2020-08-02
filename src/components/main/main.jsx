import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import PromoCard from "../promo-card/promo-card.jsx";
import Catalog from "../catalog/catalog.jsx";
import Footer from "../footer/footer.jsx";

const Main = (props) => {
  const {
    authorizationStatus,
    authorizationData,
    films,
    promoFilm,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    onScreenChange,
    onActiveFilmChange,
    onGenreChange,
    onFilmsCountToShowReset,
    onFilmsCountToShowIncrement,
    loadFilmComments,
    onFavoriteStatusChange
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header
          additionalClass={`movie-card__head`}
          authorizationData={authorizationData}
          authorizationStatus={authorizationStatus}
          onScreenChange={onScreenChange}
        />
        <PromoCard
          promoFilm={promoFilm}
          onFavoriteStatusChange={onFavoriteStatusChange}
          onActiveFilmChange={onActiveFilmChange}
        />
      </section>
      <div className="page-content">
        <Catalog
          films={films}
          currentGenre={currentGenre}
          filteredFilms={filteredFilms}
          filmsCountToShow={filmsCountToShow}
          onScreenChange={onScreenChange}
          onActiveFilmChange={onActiveFilmChange}
          onGenreChange={onGenreChange}
          onFilmsCountToShowReset={onFilmsCountToShowReset}
          onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
          loadFilmComments={loadFilmComments}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  promoFilm: PropTypes.shape({
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
        runTime: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
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
  currentGenre: PropTypes.string.isRequired,
  filmsCountToShow: PropTypes.number,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  loadFilmComments: PropTypes.func.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired
};

export default Main;
