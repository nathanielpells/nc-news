import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function Cooking() {

  const [articleList, setarticleList] = useState([]);

  useEffect(()=> {
    getArticles().then((articles) => {
     const cookingArticles = articles.filter(article => article.topic==="cooking")
     setarticleList(cookingArticles)
      
    })
  }, [])

    return( 
      <div id="listOfArticles">
        <h2>Cooking Articles</h2>
        <ul>
          {articleList.map((article) => {
            return ( 
              <li className="ArticleList" key={article.article_id}>
                <><span className="card-cont">
                {article.title}. <br></br>
                Topic: {article.topic}. <br></br>
                Author: {article.author}.<br></br>
                </span></>
              <Link to="/articles/:article_id"> Read More</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }