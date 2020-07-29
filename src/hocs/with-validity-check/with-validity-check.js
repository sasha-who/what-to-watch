import React from "react";

const withValidityCheck = (Component) => {
  class WithValidityCheck extends React.PureComponent {
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
