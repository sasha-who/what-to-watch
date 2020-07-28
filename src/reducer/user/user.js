import {AuthorizationStatus} from "../../const.js";
import {adaptUserDataFromServer} from "../../adapters/user-data.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  authorizationData: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_DATA: `GET_USER_DATA`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  getUserData: (authorizationData) => {
    return {
      type: ActionType.GET_USER_DATA,
      payload: authorizationData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });

    case ActionType.GET_USER_DATA:
      return Object.assign({}, state, {
        authorizationData: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authorizationData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authorizationData.email,
      password: authorizationData.password,
    })
      .then((response) => {
        const adaptedData = adaptUserDataFromServer(response.data);

        dispatch(ActionCreator.getUserData(adaptedData));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED));
      });
  },
};


export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
