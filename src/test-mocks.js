const RELEASE = `2020`;
const RATING = 9;
const RATINGS_COUNT = 228;
const DIRECTOR = `Otto Bathurst`;
const PREVIEW = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const RUN_TIME = 140;

const DESCRRIPTION = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's
friend and protege. Gustave prides himself on providing first-class service to the hotel's guests,
including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's
lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief
suspect in her murder.`;

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

const ACTORS = [
  `Cillian Murphy`,
  `Sam Neill`,
  `Helen McCrory`,
  `Paul Anderson`,
  `Annabelle Wallis`,
  `Iddo Goldberg`
];

export const GENRES = [
  `all genres`,
  `comedy`,
  `drama`,
  `melodrama`,
  `horror`,
  `crime`,
  `documentary`,
  `romance`,
  `thriller`
];

export const TABS_DATA = [
  `overview`,
  `details`,
  `reviews`
];

const review = {
  id: `0`,
  text: `I didn't find it amusing, and while I can appreciate the creativity,
  it's an hour and 40 minutes I wish I could take back.`,
  rating: 8,
  userName: `Kate Muir`,
  date: new Date(`December 25, 2019 01:00:00`)
};

export const films = TITLES.map((title, index) => {
  return ({
    id: index.toString(),
    title,
    cover: COVERS[index],
    poster: COVERS[index],
    preview: PREVIEW,
    genre: GENRES[index + 1] || GENRES[1],
    release: RELEASE,
    rating: RATING,
    ratingsCount: RATINGS_COUNT,
    description: DESCRRIPTION,
    director: DIRECTOR,
    actors: ACTORS,
    runTime: RUN_TIME,
    reviews: [review]
  });
});
