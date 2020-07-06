import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../test-mocks.js";
import Tabs from "../tabs/tabs.jsx";

const [film] = films;

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          film={film}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
