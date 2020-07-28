const adaptCommentFromServer = (comment) => {
  return ({
    id: comment[`id`],
    text: comment[`comment`],
    rating: comment[`rating`],
    userName: comment[`user`][`name`],
    date: new Date(comment[`date`])
  });
};

export const adaptCommentsFromServer = (comments) => {
  return comments.map((comment) => adaptCommentFromServer(comment));
};
