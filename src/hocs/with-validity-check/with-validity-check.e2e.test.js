import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withValidityCheck from "./with-validity-check.js";

Enzyme.configure({
  adapter: new Adapter()
});

const AuthorizationScreen = (props) => {
  const {onInputInvalid} = props;

  return (
    <form>
      <input onInvalid={onInputInvalid} />
    </form>
  );
};

AuthorizationScreen.propTypes = {
  onInputInvalid: PropTypes.func.isRequired
};

it(`Validity should change when input value is invalid`, () => {
  const onInputInvalid = jest.fn();
  const AuthorizationScreenWrapped = withValidityCheck(AuthorizationScreen);

  const wrapper = mount(
      <AuthorizationScreenWrapped
        onInputInvalid={onInputInvalid}
      />
  );

  wrapper.find(`input`).simulate(`invalid`);

  expect(wrapper.state().isValid).toBeFalsy();
});
