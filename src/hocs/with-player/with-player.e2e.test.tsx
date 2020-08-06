import * as React from "react";
import Enzyme, {mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import history from "../../history";
import {films} from "../../test-mocks";
import withPlayer from "./with-player";

interface Props {
  children: React.ReactNode;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
}

Enzyme.configure({
  adapter: new Adapter()
});

const Player = (props: Props) => {
  const {
    children,
    onPlayButtonClick,
    onFullScreenButtonClick
  } = props;

  return (
    <div>
      {children}
      <div>
        <div>
          <button onClick={onPlayButtonClick}></button>
          <button onClick={onFullScreenButtonClick}></button>
        </div>
      </div>
    </div>
  );
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
        match={{params: {id: `1`}, isExact: true, path: ``, url: ``}}
        location={history.location}
        history={history.history}
        isPlaying={isPlaying}
        films={films}
        onPlayButtonClick={onPlayButtonClick}
        onFullScreenButtonClick={() => {}}
      />
  );

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();

  const {videoRef} = wrapper.instance();

  jest.spyOn(videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  wrapper.find(`button`).at(0).simulate(`click`);

  expect(videoRef.current.play).toHaveBeenCalledTimes(1);
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
        match={{params: {id: `1`}, isExact: true, path: ``, url: ``}}
        location={history.location}
        history={history.history}
        isPlaying={isPlaying}
        films={films}
        onPlayButtonClick={onPlayButtonClick}
        onFullScreenButtonClick={() => {}}
      />
  );

  window.HTMLMediaElement.prototype.pause = () => {};

  const {videoRef} = wrapper.instance();

  jest.spyOn(videoRef.current, `pause`);

  wrapper.instance().componentDidMount();

  wrapper.find(`button`).at(0).simulate(`click`);

  expect(videoRef.current.pause).toHaveBeenCalledTimes(1);
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  expect(wrapper.props().isPlaying).toEqual(false);
});
