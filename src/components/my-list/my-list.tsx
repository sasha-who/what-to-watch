import * as React from "react";
import Loader from "react-loader-spinner";
import {LoaderData, HeaderType} from "../../const";
import Header from "../header/header";
import FilmCard from "../films-card/film-card";
import withFilmCard from "../../hocs/with-film-card/with-film-card";
import Footer from "../footer/footer";
import {AuthorizationData, Film} from "../../types";

interface Props {
  favoriteFilms: Film[];
  isFavoriteFilmsLoaded: boolean;
  authorizationStatus: string;
  authorizationData: AuthorizationData;
  loadFavoriteFilms: () => void;
}

const FilmCardWrapped = withFilmCard(FilmCard);

class MyList extends React.PureComponent<Props, null> {
  componentDidMount(): void {
    const {loadFavoriteFilms} = this.props;

    loadFavoriteFilms();
  }

  render(): React.ReactNode {
    const {
      favoriteFilms,
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
        type={HeaderType.USER_PAGE}
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

export default MyList;
