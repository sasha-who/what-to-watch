import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films} from "../../test-mocks.js";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const [film] = films;
const onCardHover = jest.fn();
const onCardClick = jest.fn();

it(`Film info should be pass in arguments`, () => {
  const filmCard = shallow(
      <FilmCard
        film={film}
        onCardHover={onCardHover}
        onCardClick={onCardClick}
      />
  );

  filmCard.simulate(`mouseenter`, {target: {}});

  expect(onCardHover.mock.calls[0][0]).toMatchObject(film);
});
