import {getRandomIntegerNumber, getRandomArrayItem, getRandomArrayItems} from "../utils/common.js";

const IdRange = {
  MIN: 1,
  MAX: 2000
};

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`
];


const COVERS = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`
];

const GENRES = [
  `comedy`,
  `drama`,
  `melodrama`,
  `horror`
];

const ReleaseRange = {
  MIN: 1980,
  MAX: 2020
};

const RatingRange = {
  MIN: 0,
  MAX: 10
};

const RatingsCountRange = {
  MIN: 0,
  MAX: 1000
};

const DESCRRIPTION = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's
friend and protege. Gustave prides himself on providing first-class service to the hotel's guests,
including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's
lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief
suspect in her murder.`;

const DIRECTORS = [
  `Otto Bathurst`,
  `Tom Harper`,
  `Colm McCarthy`,
  `Tim Mielants`,
  `David Caffrey`
];

const ACTORS = [
  `Cillian Murphy`,
  `Sam Neill`,
  `Helen McCrory`,
  `Paul Anderson`,
  `Annabelle Wallis`,
  `Iddo Goldberg`,
  `Sophie Rundle`,
  `Joe Cole`,
  `Finn Cole`
];

export const films = TITLES.map((title, index) => {
  return ({
    id: getRandomIntegerNumber(IdRange.MIN, IdRange.MAX),
    title,
    cover: COVERS[index],
    poster: COVERS[index],
    genre: getRandomArrayItem(GENRES),
    release: getRandomIntegerNumber(ReleaseRange.MIN, ReleaseRange.MAX).toString(),
    rating: getRandomIntegerNumber(RatingRange.MIN, RatingRange.MAX),
    ratingsCount: getRandomIntegerNumber(RatingsCountRange.MIN, RatingsCountRange.MAX),
    description: DESCRRIPTION,
    director: getRandomArrayItem(DIRECTORS),
    actors: getRandomArrayItems(ACTORS)
  });
});
