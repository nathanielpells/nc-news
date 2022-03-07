import { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function AllArticles() {

  const [articleList, setarticleList] = useState([]);

  useEffect(()=> {
    getArticles().then((articles) => {
      setarticleList(articles)
    })
  }, [])

    return( 
      <div id="listOfArticles">
        <h2>All Articles</h2>
        <ul>
          {articleList.map((article) => {
            return ( 
              <li className="ArticleList" key={article.article_id}>
                <><span>
                {article.title}. Topic: {article.topic}. Author: {article.author}.
                </span></>
              <Link to="/articles/:article_id"> Read More</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }