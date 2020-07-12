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

jest.useFakeTimers();

it(`Film info should be pass in arguments after hover`, () => {
  const filmCard = shallow(
      <FilmCard
        film={film}
        onCardHover={onCardHover}
        onScreenChange={() => {}}
        onActiveFilmChange={() => {}}
      />
  );

  filmCard.simulate(`mouseenter`, {target: {}});

  expect(onCardHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Playing state should be pass to VideoPlayer`, () => {
  const filmCard = shallow(
      <FilmCard
        film={film}
        onCardHover={onCardHover}
        onScreenChange={() => {}}
        onActiveFilmChange={() => {}}
      />
  );

  filmCard.simulate(`mouseenter`, {target: {}});
  jest.runAllTimers();

  expect(filmCard.state().isPlaying).toBeTruthy();

  filmCard.simulate(`mouseleave`);

  expect(filmCard.state().isPlaying).toBeFalsy();
});
