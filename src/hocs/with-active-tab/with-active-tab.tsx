import * as React from "react";
import {Subtract} from "utility-types";
import {TabsNames} from "../../const";

interface State {
  activeTab: string;
}

interface InjectingProps {
  onActiveTabChange: (name: string) => void;
}

const withActiveTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveTab extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsNames.OVERVIEW
      };

      this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    }

    handleActiveTabChange(name) {
      if (this.state.activeTab !== name) {
        this.setState({
          activeTab: name
        });
      }
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
  }

  return WithActiveTab;
};

export default withActiveTab;
