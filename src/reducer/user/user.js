import {AuthorizationStatus, CommentPostStatus} from "../../const.js";
import {convertUserDataFromServer} from "../../adapters/user-data.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  authorizationData: {},
  commentPostStatus: CommentPostStatus.PENDING,
  loginError: null
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_DATA: `GET_USER_DATA`,
  CHANGE_COMMENT_POST_STATUS: `CHANGE_COMMENT_POST_STATUS`,
  SET_LOGIN_ERROR: `SET_LOGIN_ERROR`
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
  },
  changeCommentPostStatus: (status) => {
    return {
      type: ActionType.CHANGE_COMMENT_POST_STATUS,
      payload: status
    };
  },
  setLoginError: (error) => {
    return {
      type: ActionType.SET_LOGIN_ERROR,
      payload: error
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

    case ActionType.CHANGE_COMMENT_POST_STATUS:
      return Object.assign({}, state, {
        commentPostStatus: action.payload
      });

    case ActionType.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        const adaptedData = convertUserDataFromServer(response.data);

        dispatch(ActionCreator.getUserData(adaptedData));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED));
      })
      .catch((error) => {
        throw error;
      });
  },
  login: (authorizationData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authorizationData.email,
      password: authorizationData.password,
    })
      .then((response) => {
        const adaptedData = convertUserDataFromServer(response.data);

        dispatch(ActionCreator.getUserData(adaptedData));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED));
      })
      .catch((error) => {
        dispatch(ActionCreator.setLoginError(error.response.status));
      });
  },
  postReview: (review, filmId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeCommentPostStatus(CommentPostStatus.POSTING));

    return api.post(`/comments/${filmId}`, {
      rating: review.rating,
      comment: review.comment
    })
      .then(() => {
        dispatch(ActionCreator.changeCommentPostStatus(CommentPostStatus.OK));
      })
      .catch(() => {
        dispatch(ActionCreator.changeCommentPostStatus(CommentPostStatus.ERROR));
      });
  }
};


export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
