import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://np-news.herokuapp.com/api",
});

export const getArticles = (topic, sortBy, orderBy) => {
  return newsApi
    .get(`articles`, {
      params: { topic: topic, sort_by: sortBy, order: orderBy },
    })
    .then(({ data: articles }) => articles);
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const patchArticleVotes = (article_id, inc) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: inc });
};

export const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, username, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};
//need article id, commentid and body
