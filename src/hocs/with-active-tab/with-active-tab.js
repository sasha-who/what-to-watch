import React from "react";
import {TabsNames} from "../../const.js";

const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsNames.OVERVIEW
      };

      this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onActiveTabChange={this.handleActiveTabChange}
        />
      );
    }

    handleActiveTabChange(name) {
      if (this.state.activeTab !== name) {
        this.setState({
          activeTab: name
        });
      }
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
