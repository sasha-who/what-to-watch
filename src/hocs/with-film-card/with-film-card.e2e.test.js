import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films} from "../../test-mocks.js";
import withFilmCard from "./with-film-card.js";

Enzyme.configure({
  adapter: new Adapter()
});

const [film] = films;

const FilmCard = (props) => {
  const {
    onHoverChange,
    onStartPlaying,
    onStopPlaying
  } = props;

  return (
    <article
      onMouseEnter={() => {
        onHoverChange();
        onStartPlaying();
      }}
      onMouseLeave={() => {
        onHoverChange();
        onStopPlaying();
      }}
    ></article>
  );
};

FilmCard.propTypes = {
  onHoverChange: PropTypes.func.isRequired,
  onStartPlaying: PropTypes.func.isRequired,
  onStopPlaying: PropTypes.func.isRequired
};

jest.useFakeTimers();

it(`Playing state should change after interaction`, () => {
  const FilmCardWrapped = withFilmCard(FilmCard);

  const wrapper = mount(
      <FilmCardWrapped
        film={film}
        isPlaying={false}
        onCardHover={() => {}}
        onScreenChange={() => {}}
        onActiveFilmChange={() => {}}
        onStartPlaying={() => {}}
        onStopPlaying={() => {}}
        onHoverChange={() => {}}
      />
  );

  wrapper.find(`article`).simulate(`mouseenter`, {target: {}});
  jest.runAllTimers();

  expect(wrapper.state().isPlaying).toBeTruthy();

  wrapper.find(`article`).simulate(`mouseleave`);

  expect(wrapper.state().isPlaying).toBeFalsy();
});

it(`Playing state should reset to false if hover was end before timeout`, () => {
  const FilmCardWrapped = withFilmCard(FilmCard);

  const wrapper = mount(
      <FilmCardWrapped
        film={film}
        isPlaying={false}
        onCardHover={() => {}}
        onScreenChange={() => {}}
        onActiveFilmChange={() => {}}
        onStartPlaying={() => {}}
        onStopPlaying={() => {}}
        onHoverChange={() => {}}
      />
  );

  wrapper.find(`article`).simulate(`mouseenter`, {target: {}});
  wrapper.find(`article`).simulate(`mouseleave`);
  jest.runAllTimers();

  expect(wrapper.state().isPlaying).toBeFalsy();
});
