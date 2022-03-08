import axios from "axios";

axios.defaults.baseURL = "https://np-news.herokuapp.com/api";

export async function getArticles(topic) {
  const {
    data: { articles },
  } = await axios.get(`/articles`, { params: { topic } });
  return articles;
}
