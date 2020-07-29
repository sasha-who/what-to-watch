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
export const SERVER_TIMEOUT = 5000;
export const BASE_URL = `https://4.react.pages.academy/wtw`;
export const RATING_START_COUNT = 5;
export const STAR_CHECKED_BY_DEFAULT = 3;
export const REVIEW_MIN_LENGTH = 50;

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
  CARD: `card`,
  SIGN_IN: `sign-in`,
  REVIEW: `review`
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

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  NO_AUTHORIZED: `NO_AUTHORIZED`,
};

export const LoaderData = {
  TYPE: `Circles`,
  COLOR: `#dfcf77`,
  WIDTH: 150,
  HEIGHT: 150,
  STYLE: {
    position: `fixed`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
};

export const HttpStatus = {
  SUCCESS: 200,
  REDIRECT: 300,
  UNAUTHORIZED: 401
};

export const CommentPostStatus = {
  PENDING: `PENDING`,
  POSTING: `POSTING`,
  OK: `OK`,
  ERROR: `ERROR`
};
