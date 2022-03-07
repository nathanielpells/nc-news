import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function Football() {

  const [articleList, setarticleList] = useState([]);

  useEffect(()=> {
    getArticles().then((articles) => {
     const footballArticles = articles.filter(article => article.topic==="football")
     setarticleList(footballArticles)
      
    })
  }, [])

  return( 
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <h2 className="f4" >Football Articles</h2>
      
      </div>
      <ul>
        {articleList.map((article) => {
          return ( 
            <li className="ArticleList" key={article.article_id}>
              <>
              <hr class="mw3 bb bw1 b--black-10"></hr>
              <h4  >{article.title}</h4>
              <p class="lh-copy measure center f6 black-70">
              Topic: {article.topic}. <br></br>
              Author: {article.author}.<br></br>
              </p></>
            <Link to="/articles/:article_id"> Read More</Link>
            </li>
          )
        })}
      </ul>
    
    </article>
  )
}