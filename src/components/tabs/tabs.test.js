import React from "react";
import renderer from "react-test-renderer";
import {TabsNames} from "../../const.js";
import {films} from "../../test-mocks.js";
import Tabs from "../tabs/tabs.jsx";

const [film] = films;

it(`Tabs should render correctly all tabs`, () => {
  const component = renderer
    .create(
        <Tabs
          film={film}
          activeTab={TabsNames.OVERVIEW}
          onActiveTabChange={() => {}}
        />
    );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.root.findAllByType(`a`)[1].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.root.findAllByType(`a`)[2].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
