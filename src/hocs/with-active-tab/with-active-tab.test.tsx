import * as React from "react";
import * as renderer from "react-test-renderer";
import withActiveTab from "./with-active-tab";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withActiveTab(MockComponent);

it(`withActiveTab should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
