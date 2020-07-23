import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Screen} from "../../const.js";
import {films} from "../../test-mocks.js";
import withFilmCard from "./with-film-card.js";

Enzyme.configure({
  adapter: new Adapter()
});

jest.useFakeTimers();

const [film] = films;

const FilmCard = (props) => {
  const {
    onScreenChange,
    onActiveFilmChange,
    onHoverChange,
    onStartPlaying,
    onStopPlaying,
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
      onClick={() => {
        onScreenChange(Screen.CARD);
        onActiveFilmChange(film);
      }}
    ></article>
  );
};

FilmCard.propTypes = {
  onScreenChange: PropTypes.func.isRequired,
  onActiveFilmChange: PropTypes.func.isRequired,
  onHoverChange: PropTypes.func.isRequired,
  onStartPlaying: PropTypes.func.isRequired,
  onStopPlaying: PropTypes.func.isRequired
};

const onActiveFilmChange = jest.fn();
const onScreenChange = jest.fn();
const FilmCardWrapped = withFilmCard(FilmCard);

const wrapper = mount(
    <FilmCardWrapped
      film={film}
      isPlaying={false}
      onScreenChange={onScreenChange}
      onActiveFilmChange={onActiveFilmChange}
      onStartPlaying={() => {}}
      onStopPlaying={() => {}}
      onHoverChange={() => {}}
    />
);

it(`Playing state should change after interaction`, () => {
  wrapper.find(`article`).simulate(`mouseenter`, {target: {}});
  jest.runAllTimers();

  expect(wrapper.state().isPlaying).toBeTruthy();

  wrapper.find(`article`).simulate(`mouseleave`);

  expect(wrapper.state().isPlaying).toBeFalsy();
});

it(`Playing state should reset to false if hover was end before timeout`, () => {
  wrapper.find(`article`).simulate(`mouseenter`, {target: {}});
  wrapper.find(`article`).simulate(`mouseleave`);
  jest.runAllTimers();

  expect(wrapper.state().isPlaying).toBeFalsy();
});

it(`Click to card cause changing of active film and screen`, () => {
  wrapper.find(`article`).simulate(`click`);

  expect(onActiveFilmChange.mock.calls.length).toBe(1);
  expect(onScreenChange.mock.calls.length).toBe(1);
});
