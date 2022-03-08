import { useState } from "react";
import {patchUserVote} from "../../api"
import { useParams } from "react-router-dom";

export default function GiveVote(props) {
    const {article} = props
    const { article_id } = useParams;
    const [change, setChange] = useState(0);
    const [error, setError] = useState("");
  
    function giveVote(inc) {
      setChange((currentChange) => {
        return currentChange + inc;
      });
  
      patchUserVote(article.article_id, inc).catch((err) => {
        setError("votes not updated");
        setChange(0);
      });
    }
  
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
       Votes:  {article.votes + change} {error}
        </span>
      </>
    );
  }
