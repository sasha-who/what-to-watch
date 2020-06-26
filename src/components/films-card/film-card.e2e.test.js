import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films} from "../../test-mocks.js";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const [film] = films;
const {title, cover} = film;
const onTitleClick = jest.fn();
const onCardHover = jest.fn();
const filmData = {
  title,
  cover
};

it(`Click to title should be done`, () => {
  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={onTitleClick}
        onCardHover={onCardHover}
      />
  );

  const titleElement = filmCard.find(`.small-movie-card__link`);

  titleElement.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Film info should be pass in arguments`, () => {
  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={onTitleClick}
        onCardHover={onCardHover}
      />
  );

  filmCard.simulate(`mouseenter`, {target: {}});

  expect(onCardHover.mock.calls[0][0]).toMatchObject(filmData);
});
