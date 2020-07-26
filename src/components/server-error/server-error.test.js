import React from "react";
import renderer from "react-test-renderer";
import {HttpStatus} from "../../const.js";
import ServerError from "./server-error.jsx";

it(`ServerError should render correctly`, () => {
  const tree = renderer
    .create(
        <ServerError
          requestStatus={HttpStatus.REDIRECT}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
