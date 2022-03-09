import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://np-news.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi.get(`articles`, { params: { topic } }).then((res) => {
    return res.data.articles;
  });
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
