export const adaptUserDataFromServer = (data) => {
  return ({
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatarUrl: data[`avatar_url`]
  });
};
