import * as React from "react";
import * as renderer from "react-test-renderer";
import {HttpStatus} from "../../const";
import ServerError from "./server-error";

it(`ServerError should render correctly`, () => {
  const tree = renderer
    .create(
        <ServerError
          requestStatus={HttpStatus.REDIRECT}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
