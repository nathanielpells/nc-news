import {getArticleById} from "../../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function IndividualArticle() {
  const [article, setArticle] = useState('');
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
      <h2 className="f4" >{article.title}</h2>
      </div>
      <hr className="mw3 bb bw1 b--black-10"></hr>
      <p className="lh-copy measure center f6 black-70">{article.body}</p>
      <hr className="mw3 bb bw1 b--black-10"></hr>
      <ul className="ArticleList" key={article.article_id}>
        <li>Author: {article.author} </li>
        <li>Comments: {article.comment_count} </li>
        <li>Posted: {article.created_at} </li>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
      </ul>
    </article>
  );
}
