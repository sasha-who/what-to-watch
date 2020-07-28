export const adaptFilmFromServer = (film) => {
  return ({
    id: film[`id`],
    title: film[`name`],
    poster: film[`poster_image`],
    previewImage: film[`preview_image`],
    cover: film[`background_image`],
    backgroundColor: film[`background_color`],
    previewVideo: film[`preview_video_link`],
    videoLink: film[`video_link`],
    genre: film[`genre`],
    release: film[`released`],
    rating: film[`rating`],
    ratingsCount: film[`scores_count`],
    description: film[`description`],
    director: film[`director`],
    actors: film[`starring`],
    runTime: film[`run_time`],
    isFavorite: film[`is_favorite`]
  });
};

export const adaptFilmsFromServer = (films) => {
  return films.map((film) => adaptFilmFromServer(film));
};
