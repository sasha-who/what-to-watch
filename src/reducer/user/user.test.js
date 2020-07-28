import {AuthorizationStatus} from "../../const.js";
import {reducer, ActionCreator, ActionType} from "./user.js";
import {userData} from "../../test-mocks.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {}
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {}
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {}
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {}
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {}
  });
});

it(`Reducer should set authorizationData`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {}
  }, {
    type: ActionType.GET_USER_DATA,
    payload: userData
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: userData
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

  it(`Action creator for getting user data returns correct action`, () => {
    expect(ActionCreator.getUserData(userData)).toEqual({
      type: ActionType.GET_USER_DATA,
      payload: userData,
    });
  });
});
