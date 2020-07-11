import {nanoid} from "nanoid";
import {getRandomIntegerNumber, getRandomArrayItem, getRandomArrayItems} from "../utils/common.js";
import {reviews} from "../mocks/reviews.js";

const ID_LENGTH = 8;

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Fantastic Beasts and Where to Find Them`
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

const PREVIEWS = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
];

const GENRES = [
  `comedy`,
  `drama`,
  `melodrama`,
  `horror`,
  `crime`,
  `documentary`,
  `romance`,
  `thriller`
];

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

const RunTimeRange = {
  MIN: 20,
  MAX: 240
};

export const films = TITLES.map((title, index) => {
  return ({
    id: nanoid(ID_LENGTH),
    title,
    cover: COVERS[index] || COVERS[0],
    poster: COVERS[index] || COVERS[0],
    preview: getRandomArrayItem(PREVIEWS),
    genre: getRandomArrayItem(GENRES),
    release: getRandomIntegerNumber(ReleaseRange.MIN, ReleaseRange.MAX).toString(),
    rating: getRandomIntegerNumber(RatingRange.MIN, RatingRange.MAX),
    ratingsCount: getRandomIntegerNumber(RatingsCountRange.MIN, RatingsCountRange.MAX),
    description: DESCRRIPTION,
    director: getRandomArrayItem(DIRECTORS),
    actors: getRandomArrayItems(ACTORS),
    runTime: getRandomIntegerNumber(RunTimeRange.MIN, RunTimeRange.MAX),
    reviews
  });
});
