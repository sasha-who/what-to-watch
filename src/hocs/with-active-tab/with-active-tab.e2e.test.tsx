import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {films, TABS_DATA} from "../../test-mocks";
import withActiveTab from "./with-active-tab";
import {noop} from "../../utils/common";

interface Props {
  activeTab: string;
  onActiveTabChange: (tab: string) => void;
}

configure({adapter: new Adapter()});

const Tabs = (props: Props) => {
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

const TabsWrapped = withActiveTab(Tabs);

const wrapper = mount(
    <TabsWrapped
      activeTab={TABS_DATA[0]}
      onActiveTabChange={noop}
    />
);

it(`Active tab should be changed by a click on tab`, () => {
  TABS_DATA.forEach((tab, index) => {
    const currentTab = wrapper.find(`a`).at(index);

    currentTab.simulate(`click`);

    expect(wrapper.state().activeTab).toBe(tab);
  });
});
