import * as React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {films, TABS_DATA} from "../../test-mocks.js";
import withActiveTab from "./with-active-tab.js";

Enzyme.configure({
  adapter: new Adapter()
});

const [film] = films;

const Tabs = (props) => {
  const {onActiveTabChange} = props;

  return (
    <nav>
      <ul>
        {TABS_DATA.map((tab) => {
          return (
            <li key={tab}>
              <a
                onClick={() => {
                  onActiveTabChange(tab);
                }}
              ></a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  onActiveTabChange: PropTypes.func.isRequired
};

const TabsWrapped = withActiveTab(Tabs);

const wrapper = mount(
    <TabsWrapped
      film={film}
      activeTab={TABS_DATA[0]}
      onActiveTabChange={() => {}}
    />
);

it(`Active tab should be changed by a click on tab`, () => {
  TABS_DATA.forEach((tab, index) => {
    const currentTab = wrapper.find(`a`).at(index);

    currentTab.simulate(`click`);

    expect(wrapper.state().activeTab).toBe(tab);
  });
});
