import axios from "axios";

axios.defaults.baseURL = "https://np-news.herokuapp.com/api";

export function getArticles() {
  return axios.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
}
