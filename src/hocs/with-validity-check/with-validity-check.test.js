import * as React from "react";
import renderer from "react-test-renderer";
import withValidityCheck from "./with-validity-check.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withValidityCheck(MockComponent);

it(`withValidityCheck should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
