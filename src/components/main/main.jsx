import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import PromoCard from "../promo-card/promo-card.jsx";
import Catalog from "../catalog/catalog.jsx";
import Footer from "../footer/footer.jsx";

const Main = (props) => {
  const {
    films,
    promoFilmData,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
    onScreenChange,
    onActiveFilmChange,
    onGenreChange,
    filterFilmsByGenre,
    resetFilmsCountToShow,
    incrementFilmsCountToShow,
    onSimilarFilmsUpdate
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
        <Header />
        <PromoCard promoFilmData={promoFilmData} />
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
          filterFilmsByGenre={filterFilmsByGenre}
          resetFilmsCountToShow={resetFilmsCountToShow}
          incrementFilmsCountToShow={incrementFilmsCountToShow}
          onSimilarFilmsUpdate={onSimilarFilmsUpdate}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilmData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
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
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filterFilmsByGenre: PropTypes.func.isRequired,
  resetFilmsCountToShow: PropTypes.func.isRequired,
  incrementFilmsCountToShow: PropTypes.func,
  onSimilarFilmsUpdate: PropTypes.func.isRequired
};

export default Main;
