import * as React from "react";
import renderer from "react-test-renderer";
import withFilmCard from "./with-film-card.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withFilmCard(MockComponent);

it(`withFilmCard should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
