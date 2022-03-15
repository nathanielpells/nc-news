import { deleteCommentById } from "../../Utils/api"

export default function DeleteComment ({comment_id, author, comments, setCommentList}) {

    const handleDelete = (event) => {
        event.preventDefault()

        deleteCommentById(comment_id, author).then(() => {
            alert ("comment deleted")
            setCommentList((comments) => {
                return comments.filter((comment) => {
                    return comment.comment_id !== comment_id
                })
            })
        }) 
    }
    return (
            <button onClick={handleDelete}>Delete Comment</button>
    )
}