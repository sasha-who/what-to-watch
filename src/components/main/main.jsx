import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import PromoCard from "../promo-card/promo-card.jsx";
import Catalog from "../catalog/catalog.jsx";
import Footer from "../footer/footer.jsx";
import Player from "../player/player.jsx";

const Main = (props) => {
  const {
    films,
    promoFilm,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    isPlayerActive,
    onScreenChange,
    onActiveFilmChange,
    onGenreChange,
    onFilmsFilterByGenre,
    onFilmsCountToShowReset,
    onFilmsCountToShowIncrement,
    onSimilarFilmsUpdate,
    onPlayerStateChange
  } = props;

  if (isPlayerActive) {
    return <Player film={promoFilm} />;
  }

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
        <Header />
        <PromoCard
          promoFilm={promoFilm}
          onPlayerStateChange={onPlayerStateChange}
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
          onFilmsFilterByGenre={onFilmsFilterByGenre}
          onFilmsCountToShowReset={onFilmsCountToShowReset}
          onFilmsCountToShowIncrement={onFilmsCountToShowIncrement}
          onSimilarFilmsUpdate={onSimilarFilmsUpdate}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
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
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
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
      })
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  filmsCountToShow: PropTypes.number,
  isPlayerActive: PropTypes.bool.isRequired,
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilmsFilterByGenre: PropTypes.func.isRequired,
  onFilmsCountToShowReset: PropTypes.func.isRequired,
  onFilmsCountToShowIncrement: PropTypes.func,
  onSimilarFilmsUpdate: PropTypes.func.isRequired,
  onPlayerStateChange: PropTypes.func.isRequired
};

export default Main;
