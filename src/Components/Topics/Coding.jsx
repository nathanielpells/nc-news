import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function Coding() {

  const [articleList, setarticleList] = useState([]);

  useEffect(()=> {
    getArticles().then((articles) => {
     const topicArticles = articles.filter(article => article.topic==="coding")
     setarticleList(topicArticles)
      
    })
  }, [])

    return( 
      <div id="listOfArticles">
        <h2>Coding Articles</h2>
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