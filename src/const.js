export const RECOMENDED_FILMS_COUNT = 4;
export const PREVIEW_DELAY = 1000;
export const REVIEWS_IN_COLUMN_COUNT = 3;
export const DEFAULT_GENRE = `all genres`;
export const MAX_FILTERS_COUNT = 10;
export const INITIAL_FILMS_COUNT = 8;
export const ADDITIONAL_FILMS_COUNT = 8;
export const DURATION_INITS = `minutes`;
export const RUN_TIME_FORMAT = `HH:mm:ss`;
export const VIDEO_CLASS_NAME = `player__video`;
export const SECONDS_IN_MINUTE_COUNT = 60;
export const UNAUTHORIZED_ERROR = 401;
export const SERVER_TIMEOUT = 5000;
export const BASE_URL = `https://4.react.pages.academy/wtw`;

export const RatingRange = {
  MIN: 0,
  MAX_BAD: 3,
  MAX_NORMAL: 5,
  MAX_GOOD: 8,
  MAX: 10
};

export const RatingGrade = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const Screen = {
  MAIN: `main`,
  CARD: `card`
};

export const TabsNames = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const TabsData = [
  {name: TabsNames.OVERVIEW, content: `Overview`},
  {name: TabsNames.DETAILS, content: `Details`},
  {name: TabsNames.REVIEWS, content: `Reviews`}
];

export const PlayIconStart = {
  WIDTH: 19,
  HEIGHT: 19,
  ID: `play-s`,
  DESCRIPTION: `Play`
};

export const PlayIconPause = {
  WIDTH: 14,
  HEIGHT: 21,
  ID: `pause`,
  DESCRIPTION: `Pause`
};

export const ReviewDate = {
  HUMAN_FORMAT: `MMMM D, YYYY`,
  SERVICE_FORMAT: `YYYY-MM-DD`
};
