const convertCommentFromServer = (comment) => {
  return ({
    id: comment[`id`],
    text: comment[`comment`],
    rating: comment[`rating`],
    userName: comment[`user`][`name`],
    date: new Date(comment[`date`])
  });
};

export const convertCommentsFromServer = (comments) => {
  return comments.map((comment) => convertCommentFromServer(comment));
};
