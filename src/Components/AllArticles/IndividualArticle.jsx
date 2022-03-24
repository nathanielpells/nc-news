import { getArticleById } from "../../Utils/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GiveVote from "./GiveVote"
import { Link } from "react-router-dom"
import ErrorPage from "../ErrorPage";

export default function IndividualArticle() {
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  


  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(({ article }) => {
      setError(null);
      setArticle(article);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err.response);
    })
  }, [article_id]);

  if (isLoading) return <p>loading...</p>; 
  if (error) return <ErrorPage error={error} />;
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
      <h2 className="f4" >{article.title}</h2>
      </div>
      <hr className="mw3 bb bw1 b--black-10"></hr>
      <p className="lh-copy measure center f6 black-70">{article.body}</p>
      <hr className="mw3 bb bw1 b--black-10"></hr>
      <dl className="ArticleList" key={article.article_id}>
        <dt>Author: {article.author} </dt>
        <hr className="mw3 bb bw1 b--black-10"></hr>
        <dt>Comments: {article.comment_count} </dt>
        <Link to={`/article/${article.article_id}/comments`}>Read Comments</Link>
        <hr className="mw3 bb bw1 b--black-10"></hr>
        <dt>Posted: {new Date(article.created_at).toUTCString()} </dt>
        <hr className="mw3 bb bw1 b--black-10"></hr>
        <dt>Topic: {article.topic}</dt>
        <hr className="mw3 bb bw1 b--black-10"></hr>
        <dt> <GiveVote votes={article.votes}  />  </dt>
        
        
      </dl>
    </article>
  );
}
