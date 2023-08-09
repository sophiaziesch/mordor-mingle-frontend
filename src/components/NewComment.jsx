import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

const NewComment = ({ comments, setComments }) => {
  /* Setting states, getting token from local machine */
  const [commentText, setCommentText] = useState("");
  const { eventId } = useParams();
  const tokenStored = localStorage.getItem("authToken");

  const handleNewComment = async (event) => {
    event.preventDefault();
    try {
      /* Sending comment to backend including the user's token, to verify a logged in user for commenting */
      const response = await axios.post(
        `${API_URL}/api/events/${eventId}`,
        {
          text: commentText,
        },
        {
          headers: { authorization: `Bearer ${tokenStored}` },
        }
      );
      //console.log(response);
      if (response.status === 201) {
        /* making shallow copy of previous comments and adding newly created comment to comments array of event */
        setComments([...comments, response.data]);
        setCommentText("");
        //console.log("NewComment response:", response);
      }
    } catch (error) {
      console.log("Error on handleNewComment: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleNewComment}>
        <textarea
          rows="5"
          cols="23"
          className="text-area"
          value={commentText}
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
          name="comment"
          placeholder="Add comment..."
        ></textarea>{" "}
        <br></br>
        <button className="button" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default NewComment;
