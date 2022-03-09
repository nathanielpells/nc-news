
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./AllArticles/IndividualArticle";
import Articles from "./AllArticles/Articles";
import Comments from "./Comments/AllComments";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/topics/:topic" element={<Articles />} />
      <Route path="/articles/:article_id" element={<IndividualArticle />} />
      <Route path="/articles/:article_id/comments" element={<Comments />} />
    </Routes>
  );
}