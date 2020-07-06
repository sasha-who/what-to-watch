import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films, TABS_DATA} from "../../test-mocks.js";
import Tabs from "./tabs.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const [film] = films;

it(`Tabs state should be change by the click on tab`, () => {
  const tabs = shallow(
      <Tabs film={film} />
  );

  TABS_DATA.forEach((tab, index) => {
    const currentTab = tabs.find(`.movie-nav__link`).at(index);

    currentTab.simulate(`click`);
    expect(tabs.state().activeTab).toBe(tab);
  });
});
