import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus, HttpStatus} from "../../const.js";
import AuthorizationScreen from "../authorization-screen/authorization-screen.jsx";

it(`AuthorizationScreen without errors should render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          isInputValid={true}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          onAuthorizationFormSubmit={() => {}}
          onInputValidityChange={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`AuthorizationScreen with validation error should render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          isInputValid={false}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          onAuthorizationFormSubmit={() => {}}
          onInputValidityChange={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`AuthorizationScreen with server error should render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          isInputValid={false}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          onAuthorizationFormSubmit={() => {}}
          onInputValidityChange={() => {}}
          loginError={HttpStatus.NOT_FOUND}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
