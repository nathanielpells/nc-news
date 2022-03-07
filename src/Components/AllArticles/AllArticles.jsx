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
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h2 className="f4" >All Articles</h2>
        
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

//   <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
//   <div class="tc">
//     <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
//     <h1 class="f4">Mimi Whitehouse</h1>
//     <hr class="mw3 bb bw1 b--black-10">
//   </div>
//   <p class="lh-copy measure center f6 black-70">
//     Quite affectionate and outgoing.
//     She loves to get chin scratches and will
//     roll around on the floor waiting for you give her more of them.
//   </p>
// </article>