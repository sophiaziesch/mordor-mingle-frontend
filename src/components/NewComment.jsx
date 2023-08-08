import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

const NewComment = () => {
	const [commentText, setCommentText] = useState("");
	const { eventId } = useParams();
	const navigate = useNavigate();
	const tokenStored = localStorage.getItem("authToken");

	const handleNewComment = async (event) => {
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
				//console.log("NewComment response:", response);
				navigate(`/events/${event._id}`);
			}
		} catch (error) {
			//console.log("Error on handleComment: ", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleNewComment}>
				<textarea
					value={commentText}
					onChange={(event) => {
						setCommentText(event.target.value);
					}}
					name="comment"
					placeholder="Add comment..."
				></textarea>{" "}
				<br></br>
				<button type="submit">Add Comment</button>
			</form>
		</div>
	);
};

export default NewComment;
