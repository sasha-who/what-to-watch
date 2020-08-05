import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthorizationData = (state) => {
  return state[NAME_SPACE].authorizationData;
};

export const getCommentPostStatus = (state) => {
  return state[NAME_SPACE].commentPostStatus;
};

export const getLoginError = (state) => {
  return state[NAME_SPACE].loginError;
};
