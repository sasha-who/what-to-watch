import * as React from "react";
import * as renderer from "react-test-renderer";
import {TabsNames} from "../../const";
import {films, comments} from "../../test-mocks";
import Tabs from "../tabs/tabs";
import {noop} from "../../utils/common";

const [film] = films;

it(`Tabs should render correctly all tabs`, () => {
  const component = renderer
    .create(
        <Tabs
          film={film}
          activeFilmComments={comments}
          activeTab={TabsNames.OVERVIEW}
          onActiveTabChange={noop}
        />
    );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.root.findAllByType(`a`)[1].props.onClick({preventDefault: noop});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.root.findAllByType(`a`)[2].props.onClick({preventDefault: noop});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
