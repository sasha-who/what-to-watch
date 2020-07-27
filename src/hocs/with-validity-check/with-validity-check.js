import React from "react";

const withValidityCheck = (Component) => {
  class WithValidityCheck extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true
      };

      this.handleInputInvalid = this.handleInputInvalid.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isInputValid={this.state.isValid}
          onInputInvalid={this.handleInputInvalid}
        />
      );
    }

    handleInputInvalid() {
      this.setState({
        isValid: false
      });
    }
  }

  return WithValidityCheck;
};

export default withValidityCheck;
