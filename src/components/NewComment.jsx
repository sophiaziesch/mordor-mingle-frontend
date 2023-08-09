import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

const NewComment = ({ comments, setComments }) => {
  const [commentText, setCommentText] = useState("");
  // const [comments, setComments] = useState(comments);
  const { eventId } = useParams();
  const tokenStored = localStorage.getItem("authToken");

  const handleNewComment = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/api/events/${eventId}`,
        {
          text: commentText,
        },
        {
          headers: { authorization: `Bearer ${tokenStored}` },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setComments([...comments, response.data]);
        setCommentText("");
        //console.log("NewComment response:", response);
        // navigate(`/events/${event._id}`);
      }
    } catch (error) {
      console.log("Error on handleComment: ", error);
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
