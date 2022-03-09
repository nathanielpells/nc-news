import {getArticleById} from "../../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GiveVote from "./GiveVote"

export default function IndividualArticle() {
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  


  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>loading...</p>; 
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
