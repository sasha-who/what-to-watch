import * as React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import {LoaderData} from "../../const.js";
import Header from "../header/header.jsx";
import FilmCard from "../films-card/film-card.jsx";
import withFilmCard from "../../hocs/with-film-card/with-film-card.js";
import Footer from "../footer/footer.jsx";

const FilmCardWrapped = withFilmCard(FilmCard);

class MyList extends React.PureComponent {
  componentDidMount() {
    const {loadFavoriteFilms} = this.props;

    loadFavoriteFilms();
  }

  render() {
    const {
      favoriteFilms,
      loadFilmComments,
      isFavoriteFilmsLoaded,
      authorizationData,
      authorizationStatus
    } = this.props;

    if (!isFavoriteFilmsLoaded) {
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

    return (<div className="user-page">
      <Header
        additionalClass={`user-page__head`}
        authorizationData={authorizationData}
        authorizationStatus={authorizationStatus}
      >
        <h1 className="page-title user-page__title">My list</h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {favoriteFilms.map((film) => (
            <FilmCardWrapped
              film={film}
              loadFilmComments={loadFilmComments}
              key={film.id}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(
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
  loadFilmComments: PropTypes.func.isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
  isFavoriteFilmsLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

export default MyList;
