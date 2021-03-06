import { getArticleById, getArticleComments } from "../../Utils/api";
import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

export default function Comments(props){
    
    const [article , setArticle] = useState({})
    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {article_id} = useParams();

    useEffect(()=> {
    getArticleById(article_id).then(({article})=>{
        setArticle(article)
    })
    },[article_id])

    useEffect(()=> {
        setIsLoading(true);
        getArticleComments(article_id).then(({comments}) => {
         setCommentList(comments)
         setIsLoading(false);
        })
      }, [article_id])

      if (isLoading) return <p>loading...</p>;
      return( 
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
        <Link className="Back-Link" to={`/article/${article.article_id}`}>Back</Link><br></br>
          <h2 className="f4" > {article.title}</h2>
          <h3 className="f4" >Comments:</h3>
          <AddComment setCommentList={setCommentList}/>
        </div>
          <dl>
              {commentList.map((comment) => {
                  
                  return (
                    <article className="CommentList" key={comment.comment_id}> 
                    <>
                    <hr className="mw3 bb bw1 b--black-10"></hr>
                    <p className="lh-copy measure center f6 black-70">
                    {comment.body}<br></br></p>
                    <dl className="lh-copy measure center f6 black-70">
                      <dt>User: {comment.author}</dt>
                      <dt> Votes: {comment.votes}</dt>
                    </dl></> 
                    {comment.author === "tickle122" ? <DeleteComment setCommentList={setCommentList} comment_id={comment.comment_id}/> : null}
                    </article>
                  )
              }
              )}
          </dl>
          </article>
          )
}