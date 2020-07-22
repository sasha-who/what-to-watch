import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films} from "../../test-mocks.js";
import withPlayer from "./with-player.js";

Enzyme.configure({
  adapter: new Adapter()
});

const Player = (props) => {
  const {
    children,
    onPlayButtonClick,
    onPlayerStateChange,
    onFullScreenButtonClick
  } = props;

  return (
    <div>
      {children}
      <button onClick={onPlayerStateChange}></button>
      <div>
        <div>
          <button onClick={onPlayButtonClick}></button>
          <button onClick={onFullScreenButtonClick}></button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onPlayerStateChange: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired
};

it(`Checks that HOC's callback turn on video`, () => {
  let isPlaying = false;

  const onPlayButtonClick = jest.fn(() => {
    isPlaying = !isPlaying;
    wrapper.setProps({isPlaying});
  });

  const PlayerWrapped = withPlayer(Player);

  const wrapper = mount(
      <PlayerWrapped
        film={films[0]}
        onPlayButtonClick={onPlayButtonClick}
        onPlayerStateChange={() => {}}
        onFullScreenButtonClick={() => {}}
      />
  );

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  wrapper.find(`button`).at(2).simulate(`click`);

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  expect(wrapper.props().isPlaying).toEqual(true);
});

it(`Checks that HOC's callback turn off video`, () => {
  let isPlaying = true;

  const onPlayButtonClick = jest.fn(() => {
    isPlaying = !isPlaying;
    wrapper.setProps({isPlaying});
  });

  const PlayerWrapped = withPlayer(Player);

  const wrapper = mount(
      <PlayerWrapped
        film={films[0]}
        onPlayButtonClick={onPlayButtonClick}
        onPlayerStateChange={() => {}}
        onFullScreenButtonClick={() => {}}
      />
  );

  window.HTMLMediaElement.prototype.pause = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `pause`);

  wrapper.instance().componentDidMount();

  wrapper.find(`button`).at(2).simulate(`click`);

  expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  expect(wrapper.props().isPlaying).toEqual(false);
});
