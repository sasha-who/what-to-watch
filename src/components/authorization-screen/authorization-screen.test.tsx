import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus, HttpStatus} from "../../const";
import AuthorizationScreen from "../authorization-screen/authorization-screen";
import {noop} from "../../utils/common";

it(`AuthorizationScreen without errors should render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AuthorizationScreen
          isInputValid={true}
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          onAuthorizationFormSubmit={noop}
          onInputValidityChange={noop}
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
          onAuthorizationFormSubmit={noop}
          onInputValidityChange={noop}
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
          onAuthorizationFormSubmit={noop}
          onInputValidityChange={noop}
          loginError={HttpStatus.NOT_FOUND}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
