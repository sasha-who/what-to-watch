import moment from "moment";
import {
  DURATION_INITS,
  RUN_TIME_FORMAT,
  DEFAULT_GENRE,
  RECOMENDED_FILMS_COUNT
} from "../const.js";

export const getRandomIntegerNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (elements) => {
  const randomIndex = getRandomIntegerNumber(0, elements.length - 1);

  return elements[randomIndex];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getRandomArrayItems = (array) => {
  const shuffledArray = shuffleArray(array.slice());

  return shuffledArray.slice(0, getRandomIntegerNumber(0, array.length));
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFormatedRunTime = (duration) => {
  const durationInMinutes = moment.duration(duration, DURATION_INITS);

  return `${durationInMinutes.hours()}h ${durationInMinutes.minutes()}m`;
};

export const getRunTimeForPlayer = (duration) => {
  const durationInMillisecond = moment.duration(duration, DURATION_INITS).asMilliseconds();

  return moment.utc(durationInMillisecond).format(RUN_TIME_FORMAT);
};

export const getFilmsFilteredByGenre = (allFilms, genre) => {
  if (genre === DEFAULT_GENRE) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre.toLowerCase() === genre);
};

export const getSimilarForCurrentFilm = (allFilms, currentFilm) => {
  return (
    allFilms.filter((film) => (film !== currentFilm) && (film.genre === currentFilm.genre))
      .slice(0, RECOMENDED_FILMS_COUNT)
  );
};

export const getFilmFromParameters = (films, id) => {
  const index = films.findIndex((film) => film.id === Number(id));

  return films[index];
};
