import React from "react";
import renderer from "react-test-renderer";
import AuthorizationScreen from "../authorization-screen/authorization-screen.jsx";

it(`AuthorizationScreen should render correctly`, () => {
  const tree = renderer.create(
      <AuthorizationScreen
        onAuthorizationFormSubmit={() => {}}
        onScreenChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
