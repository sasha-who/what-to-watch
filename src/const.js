export const RECOMENDED_FILMS_COUNT = 4;
export const PREVIEW_DELAY = 1000;
export const REVIEWS_IN_COLUMN_COUNT = 3;
export const REVIEW_DATE_HUMAN_FORMAT = `MMMM D, YYYY`;
export const REVIEW_DATE_SERVICE_FORMAT = `YYYY-MM-DD`;
export const DEFAULT_GENRE = `all genres`;
export const MAX_FILTERS_COUNT = 10;
export const INITIAL_FILMS_COUNT = 8;
export const ADDITIONAL_FILMS_COUNT = 8;

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
