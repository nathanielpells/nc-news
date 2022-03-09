import { useState } from "react";
import {patchArticleVotes} from "../../api"
import { useParams } from "react-router-dom";

export default function GiveVote({votes}) {
    const [change, setChange] = useState(0);
    const [error, setError] = useState(null);
    const {article_id} = useParams();
    
    const giveVote = (inc) =>{  
     setChange((currentChange) => currentChange + inc);
        setError(null)
      ;
      patchArticleVotes(article_id, inc).catch((error) => {
        console.log(article_id)
        setChange((currentChange) => currentChange - inc);
        setError("votes not updated");
        setChange(0);
      });
    }
    
    if (error) return <p>{error}</p>
    return (
      <>
        <button
          disabled={change === 1}
          onClick={() => {
            giveVote(1);
          }}
        >
          +
        </button>
        <button
          disabled={change === -1}
          onClick={() => {
            giveVote(-1);
          }}
        >
          -
        </button>
        <span>
       Votes:  {votes + change} {error}
        </span>
      </>
    );
  }
