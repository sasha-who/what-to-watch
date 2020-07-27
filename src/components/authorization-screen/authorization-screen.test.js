import React from "react";
import renderer from "react-test-renderer";
import AuthorizationScreen from "../authorization-screen/authorization-screen.jsx";

it(`AuthorizationScreen without errors should render correctly`, () => {
  const tree = renderer.create(
      <AuthorizationScreen
        isInputValid={true}
        onAuthorizationFormSubmit={() => {}}
        onScreenChange={() => {}}
        onInputInvalid={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`AuthorizationScreen with validation errorshould render correctly`, () => {
  const tree = renderer.create(
      <AuthorizationScreen
        isInputValid={false}
        onAuthorizationFormSubmit={() => {}}
        onScreenChange={() => {}}
        onInputInvalid={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
