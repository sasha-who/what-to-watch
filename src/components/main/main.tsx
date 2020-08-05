import * as React from "react";
import {HeaderType} from "../../const.js";
import Header from "../header/header";
import PromoCard from "../promo-card/promo-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {AuthorizationData, Film} from "../../types";

interface Props {
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  promoFilm: Film;
  films: Film[];
  filteredFilms: Film[];
  currentGenre: string;
  filmsCountToShow?: number;
  onGenreChange: () => void;
  onFilmsCountToShowReset: () => void;
  onFilmsCountToShowIncrement: () => void;
  loadFilmComments: () => void;
  onFavoriteStatusChange: () => void;
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    authorizationStatus,
    authorizationData,
    films,
    promoFilm,
    currentGenre,
    filteredFilms,
    filmsCountToShow,
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
          type={HeaderType.FILM_CARD}
          authorizationData={authorizationData}
          authorizationStatus={authorizationStatus}
        />
        <PromoCard
          promoFilm={promoFilm}
          onFavoriteStatusChange={onFavoriteStatusChange}
        />
      </section>
      <div className="page-content">
        <Catalog
          films={films}
          currentGenre={currentGenre}
          filteredFilms={filteredFilms}
          filmsCountToShow={filmsCountToShow}
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

export default Main;
