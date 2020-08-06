import * as React from "react";
import * as renderer from "react-test-renderer";
import history from "../../history";
import {films} from "../../test-mocks";
import withPlayer from "./with-player";
import {noop} from "../../utils/common";

interface Props {
  children: React.ReactNode;
}

const MockComponent = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withPlayer(MockComponent);

it(`withPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        match={{params: {id: `1`}, isExact: true, path: ``, url: ``}}
        location={history.location}
        history={history.history}
        films={films}
        isPlaying={true}
        progress={0}
        onPlayButtonClick={noop}
        onFullScreenButtonClick={noop}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
