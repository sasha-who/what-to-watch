import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {films} from "../../test-mocks";
import withFilmCard from "./with-film-card";
import {noop} from "../../utils/common";

interface Props {
  onHoverChange: () => void;
  onStartPlaying: () => void;
  onStopPlaying: () => void;
}

configure({adapter: new Adapter()});

jest.useFakeTimers();

const [film] = films;

const FilmCard = (props: Props) => {
  const {
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
    ></article>
  );
};

const FilmCardWrapped = withFilmCard(FilmCard);

const wrapper = mount(
    <FilmCardWrapped
      film={film}
      isPlaying={false}
      onStartPlaying={noop}
      onStopPlaying={noop}
      onHoverChange={noop}
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
