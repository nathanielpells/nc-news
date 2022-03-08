import { useEffect, useState,  } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../../api";


export default function Articles() {

  const [articleList, setarticleList] = useState([]);
  const {topic} = useParams();

  useEffect(()=> {
    getArticles(topic).then((articles) => {
     setarticleList(articles)

      
    })
  }, [topic])

  return( 
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <h2 className="f4" >Articles</h2>
      </div>
      <ul>
        {articleList.map((article) => {
          return ( 
            <li className="ArticleList" key={article.article_id}>
              <>
              <hr className="mw3 bb bw1 b--black-10"></hr>
              <h4  >{article.title}</h4>
              <p className="lh-copy measure center f6 black-70">
              Topic: {article.topic}. <br></br>
              Author: {article.author}.<br></br>
              </p></>
            <Link to={`/articles/${article.article_id}`}> Read More</Link>
            </li>
          )
        })}
      </ul>
    
    </article>
  )
}