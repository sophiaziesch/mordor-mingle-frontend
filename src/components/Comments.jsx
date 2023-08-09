import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";
import Comment from "../components/Comment";
import NewComment from "./NewComment";

const Comments = ({ comments, setComments }) => {
  const { eventId } = useParams();
  // const [comments, setComments] = useState([]);

  // const fetchComments = async () => {
  // 	try {
  // 		const response = await axios.get(
  // 			`${API_URL}/api/events/${eventId}/comments`
  // 		);
  // 		if (response.status === 200) {
  // 			const parsedComments = response.data;
  // 			setComments(parsedComments);
  // 		} else {
  // 			console.log("Error on fetchComments: ", error);
  // 		}
  // 	} catch (error) {
  // 		console.log("Error on fetchComments: ", error);
  // 	}
  // };

  // useEffect(() => {
  // 	fetchComments;
  // }, [eventId]);

  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment._id}>
            <Comment comment={comment} />
          </div>
        );
      })}
      <NewComment comments={comments} setComments={setComments} />
    </div>
  );
};

export default Comments;
