import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  isValid: boolean;
}

interface InjectingProps {
  isInputValid: boolean;
  onInputValidityChange: () => void;
}

const withValidityCheck = <Props extends InjectingProps>(Component: React.ComponentType<Props>) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithValidityCheck extends React.PureComponent<T, State> {
    constructor(props: T) {
      super(props);

      this.state = {
        isValid: true
      };

      this.handleInputSwitchValidity = this.handleInputSwitchValidity.bind(this);
    }

    handleInputSwitchValidity() {
      this.setState((state) => ({
        isValid: !state.isValid
      }));
    }

    render() {
      return (
        <Component
          {...this.props as Props}
          isInputValid={this.state.isValid}
          onInputValidityChange={this.handleInputSwitchValidity}
        />
      );
    }
  }

  return WithValidityCheck;
};

export default withValidityCheck;
