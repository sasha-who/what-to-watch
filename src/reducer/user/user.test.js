import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {AuthorizationStatus, CommentPostStatus, HttpStatus} from "../../const.js";
import {reducer, ActionCreator, ActionType, Operation} from "./user.js";
import {films, UserData, LoginData, ReviewToPost} from "../../test-mocks.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });
});

it(`Reducer should set authorizationData by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.GET_USER_DATA,
    payload: UserData
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: UserData,
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  });
});

it(`Reducer should change commentPostStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.POSTING
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING,
    loginError: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING,
    loginError: null
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.OK
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.OK,
    loginError: null
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.POSTING,
    loginError: null
  }, {
    type: ActionType.CHANGE_COMMENT_POST_STATUS,
    payload: CommentPostStatus.ERROR
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.ERROR,
    loginError: null
  });
});

it(`Reducer should set login error by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: null
  }, {
    type: ActionType.SET_LOGIN_ERROR,
    payload: HttpStatus.NOT_FOUND
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED,
    authorizationData: {},
    commentPostStatus: CommentPostStatus.PENDING,
    loginError: HttpStatus.NOT_FOUND
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
    expect(ActionCreator.getUserData(UserData)).toEqual({
      type: ActionType.GET_USER_DATA,
      payload: UserData
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

  it(`Action creator for setting login error returns correct action`, () => {
    expect(ActionCreator.setLoginError(HttpStatus.NOT_FOUND)).toEqual({
      type: ActionType.SET_LOGIN_ERROR,
      payload: HttpStatus.NOT_FOUND
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Operation should make a correct API call to /login (GET)`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginCheck = Operation.checkAuthorization();

    apiMock
      .onGet(`/login`)
      .reply(200, {});

    return loginCheck(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER_DATA,
          payload: {}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTHORIZED
        });
      });
  });

  it(`Operation should make a correct API call to /login (POST)`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login(LoginData);

    apiMock
      .onPost(`/login`)
      .reply(200, {});

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER_DATA,
          payload: {}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTHORIZED
        });
      });
  });

  it(`Operation should make a correct API call to /comments/:film_id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postReview = Operation.postReview(ReviewToPost, films[0].id);

    apiMock
      .onPost(`/comments/0`)
      .reply(200, {});

    return postReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_COMMENT_POST_STATUS,
          payload: CommentPostStatus.POSTING
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_COMMENT_POST_STATUS,
          payload: CommentPostStatus.OK
        });
      });
  });
});
