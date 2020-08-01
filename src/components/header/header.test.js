import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../const.js";
import {userData} from "../../test-mocks.js";
import Header from "./header.jsx";

it(`Header should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
            onScreenChange={() => {}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
