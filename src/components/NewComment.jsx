import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = `http://localhost:5005/api/events/${eventId}/comments`;

const NewComment = () => {
	const [comment, setComment] = useState("");
	const navigate = useNavigate();

	const handleNewComment = async (event) => {
		const newComment = { text: payload.comment };
		console.log(newComment);
		try {
			const response = await axios.post(API_URL, { comment });
			console.log(response);
			if (response.status === 201) {
				console.log("Signup response:", response);
				navigate(`/students/events/${event.id}`);
			}
		} catch (error) {
			console.log("Error on handleComment: ", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleNewComment}>
				<textarea
					value={comment}
					onChange={(event) => {
						setComment(event.target.value);
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
