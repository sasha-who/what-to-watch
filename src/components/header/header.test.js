import React from "react";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../const.js";
import {userData} from "../../test-mocks.js";
import Header from "./header.jsx";

it(`Header should render correctly`, () => {
  const tree = renderer
    .create(
        <Header
          authorizationStatus={AuthorizationStatus.AUTHORIZED}
          authorizationData={userData}
          onScreenChange={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
