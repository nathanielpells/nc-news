import Coding from "./Topics/Coding"; 
import Football from "./Topics/Football";
import Cooking from "./Topics/Cooking";
import AllArticles from "./AllArticles/AllArticles";
import { Route, Routes } from "react-router-dom";

export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<AllArticles />} />
      <Route path="/articles/topics/coding" element={<Coding />} />
      <Route path="/articles/topics/football" element={<Football />} />
      <Route path="/articles/topics/cooking" element={<Cooking />} />
      <Route path="/articles/articles/:article_id" element={<Cooking />} />
    </Routes>
  );
}