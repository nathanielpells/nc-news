import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";

export default function AddComment({setCommentList}){
    const {article_id} = useParams();
    const {currentUser, } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")


    const addComment = ()=> {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        postComment(article_id, currentUser, newComment).then((commentFromApi)=> {
            setCommentList((currentCommentList)=>{
                const updatedCommentList = [commentFromApi,...currentCommentList]
                return updatedCommentList
            })
        })

    }

return (
    <>
        <p>Comment: </p>
        <input
        type="text"
        value={newComment.body}
        onChange={(e) => {
            setNewComment(e.target.value)
        }}
        >
        </input>
        <button 
        disabled={!newComment} 
        onClick={()=> {
            addComment()
            }} 
        >Add Comment
            
        </button>
    </>
)}