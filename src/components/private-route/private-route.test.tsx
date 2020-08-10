import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import history from "../../history";
import {AppRoute, AuthorizationStatus} from "../../const";
import {PrivateRoute} from "./private-route";

const mockStore = configureStore([]);

const store = mockStore({
  authorizationStatus: AuthorizationStatus.AUTHORIZED
});

it(`PrivateRoute should renders correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Provider store={store}>
            <PrivateRoute
              exact
              path={AppRoute.MY_LIST}
              authorizationStatus={AuthorizationStatus.AUTHORIZED}
              render={() => HTMLElement as React.ReactNode}
            />
          </Provider>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
