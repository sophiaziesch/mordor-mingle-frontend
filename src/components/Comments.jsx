import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = `http://localhost:5005/api/events/${eventId}/comments`;

const Comments = ({ eventId }) => {
	const [comments, setComments] = useState([]);
	const { eventId } = useParams;

	const fetchComments = async () => {
		try {
			const response = await axios.get(API_URL);
			if (response.status === 200) {
				const parsedComments = response.data;
				setComments(parsedComments);
			} else {
				console.log("Error on fetchComments: ", error);
			}
		} catch (error) {
			console.log("Error on fetchComments: ", error);
		}
	};

	useEffect(() => {
		fetchComments;
	}, []);

	return (
		<div className="comments">
			<h3>Comments</h3>
			{comments.map((comment) => {
				<Comment key={comment._id}></Comment>;
			})}
		</div>
	);
};

export default Comments;
