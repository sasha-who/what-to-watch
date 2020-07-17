import {nanoid} from "nanoid";
import {getRandomIntegerNumber, getRandomArrayItem} from "../utils/common.js";

const ID_LENGTH = 8;
const DATA_DIFF = 100;
const REVIEWS_COUNT = 6;

const getRandomDate = () => {
  const date = new Date();

  date.setDate(date.getDate() + getRandomIntegerNumber(-DATA_DIFF, 0));

  return date;
};

const TEXTS = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the
  glorious Mittel-European kitsch of one of the director's funniest and
  most exquisitely designed movies in years.`,
  `Anderson's films are too precious for some, but for those of us
  willing to lose ourselves in them, they're a delight. "The Grand
  Budapest Hotel"; is no different, except that he has added a hint of
  gravitas to the mix, improving the recipe.`,
  `I didn't find it amusing, and while I can appreciate the creativity,
  it's an hour and 40 minutes I wish I could take back.`
];

const USER_NAMES = [
  `Kate Muir`,
  `Bill Goodykoontz`,
  `Amanda Greever`
];

const RatingRange = {
  MIN: 0,
  MAX: 10
};

export const reviews = Array(REVIEWS_COUNT)
  .fill()
  .map(() => {
    return ({
      id: nanoid(ID_LENGTH),
      text: getRandomArrayItem(TEXTS),
      rating: getRandomIntegerNumber(RatingRange.MIN, RatingRange.MAX),
      userName: getRandomArrayItem(USER_NAMES),
      date: getRandomDate()
    });
  });
