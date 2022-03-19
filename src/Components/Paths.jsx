
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./AllArticles/IndividualArticle";
import Articles from "./AllArticles/Articles";
import Comments from "./Comments/AllComments";
import PageNotFound from "./PageNotFound";

export default function Paths() {
  return (
    <Routes>
       <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Articles />} />
      <Route path="/articles/topics/:topic" element={<Articles />} />
      <Route path="/articles/:article_id" element={<IndividualArticle />} />
      <Route path="/articles/:article_id/comments" element={<Comments />} />
    </Routes>
  );
}