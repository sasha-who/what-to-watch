import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withValidityCheck from "./with-validity-check";

interface Props {
  onInputValidityChange: () => void;
}

configure({adapter: new Adapter()});

const AuthorizationScreen = (props: Props) => {
  const {onInputValidityChange} = props;

  return (
    <form>
      <input onInvalid={onInputValidityChange} />
    </form>
  );
};

it(`Validity should change when input value is invalid`, () => {
  const onInputValidityChange = jest.fn();
  const AuthorizationScreenWrapped = withValidityCheck(AuthorizationScreen);

  const wrapper = mount(
      <AuthorizationScreenWrapped
        isInputValid={true}
        onInputValidityChange={onInputValidityChange}
      />
  );

  wrapper.find(`input`).simulate(`invalid`);

  expect(wrapper.state().isValid).toBeFalsy();
});
