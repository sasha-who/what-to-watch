import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../const";
import {userData} from "../../test-mocks";
import Header from "./header";

it(`Header should render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            authorizationStatus={AuthorizationStatus.AUTHORIZED}
            authorizationData={userData}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
