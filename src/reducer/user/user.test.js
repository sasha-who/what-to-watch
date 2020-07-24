import {AuthorizationStatus} from "../../const.js";
import {reducer, ActionCreator, ActionType} from "./user.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTHORIZED)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTHORIZED,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTHORIZED,
    });
  });
});
