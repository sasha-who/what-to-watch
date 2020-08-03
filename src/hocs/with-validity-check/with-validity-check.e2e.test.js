import * as React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withValidityCheck from "./with-validity-check.js";

Enzyme.configure({
  adapter: new Adapter()
});

const AuthorizationScreen = (props) => {
  const {onInputValidityChange} = props;

  return (
    <form>
      <input onInvalid={onInputValidityChange} />
    </form>
  );
};

AuthorizationScreen.propTypes = {
  onInputValidityChange: PropTypes.func.isRequired
};

it(`Validity should change when input value is invalid`, () => {
  const onInputValidityChange = jest.fn();
  const AuthorizationScreenWrapped = withValidityCheck(AuthorizationScreen);

  const wrapper = mount(
      <AuthorizationScreenWrapped
        onInputInvalid={onInputValidityChange}
      />
  );

  wrapper.find(`input`).simulate(`invalid`);

  expect(wrapper.state().isValid).toBeFalsy();
});
