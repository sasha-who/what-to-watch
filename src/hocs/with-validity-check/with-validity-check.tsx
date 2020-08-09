import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  isValid: boolean;
}

interface InjectingProps {
  isInputValid: boolean;
  onInputValidityChange: () => void;
}

const withValidityCheck = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithValidityCheck extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true
      };

      this.handleInputSwitchValidity = this.handleInputSwitchValidity.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isInputValid={this.state.isValid}
          onInputValidityChange={this.handleInputSwitchValidity}
        />
      );
    }

    handleInputSwitchValidity() {
      this.setState((state) => ({
        isValid: !state.isValid
      }));
    }
  }

  return WithValidityCheck;
};

export default withValidityCheck;
