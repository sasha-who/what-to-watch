import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getFilmsLoadState = (state) => {
  return state[NAME_SPACE].isFilmsLoaded;
};

export const getPromoFilmLoadState = (state) => {
  return state[NAME_SPACE].isPromoFilmLoaded;
};

export const getRequestStatus = (state) => {
  return state[NAME_SPACE].requestStatus;
};

export const getFilmComments = (state) => {
  return state[NAME_SPACE].activeFilmComments;
};

export const getCommentsLoadState = (state) => {
  return state[NAME_SPACE].isCommentsLoaded;
};

export const getFavoriteFilms = (state) => {
  return state[NAME_SPACE].favoriteFilms;
};

export const getFavoriteFilmsLoadState = (state) => {
  return state[NAME_SPACE].isFavoriteFilmsLoaded;
};
