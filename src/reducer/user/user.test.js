import {AuthorizationStatus, CommentPostStatus} from "../../const.js";
import {reducer, ActionCreator, ActionType} from "./user.js";
import {userData} from "../../test-mocks.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  });
});

it(`Reducer should set authorizationData by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.GET_USER_DATA,
    payload: userData
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: userData,
    commentPostStatus: CommentPostStatus.PENDING
  });
});

it(`Reducer should change commentPostStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.POSTING
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.OK
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.OK
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.ERROR
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.ERROR
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTHORIZED)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTHORIZED
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTHORIZED
    });
  });

  it(`Action creator for getting user data returns correct action`, () => {
    expect(ActionCreator.getUserData(userData)).toEqual({
      type: ActionType.GET_USER_DATA,
      payload: userData
    });
  });

  it(`Action creator for changing comment post status returns correct action`, () => {
    expect(ActionCreator.changeCommentPostStatus(CommentPostStatus.POSTING)).toEqual({
      type: ActionType.CHANGE_COMMENT_POST_STATUS,
      payload: CommentPostStatus.POSTING
    });

    expect(ActionCreator.changeCommentPostStatus(CommentPostStatus.OK)).toEqual({
      type: ActionType.CHANGE_COMMENT_POST_STATUS,
      payload: CommentPostStatus.OK
    });

    expect(ActionCreator.changeCommentPostStatus(CommentPostStatus.ERROR)).toEqual({
      type: ActionType.CHANGE_COMMENT_POST_STATUS,
      payload: CommentPostStatus.ERROR
    });
  });
});
