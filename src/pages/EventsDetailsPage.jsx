import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { API_URL } from "../config/config.index";

const EventDetailsPage = () => {
	const { eventId } = useParams();
	const [event, setEvent] = useState([]);
	const [comments, setComments] = useState([]);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	const fetchOneEvent = async () => {
		try {
			const response = await axios.get(`${API_URL}/api/events/${eventId}`);
			if (response.status === 200) {
				const parsedEvent = await response.data;
				console.log("Output in fetchOneEvent: ", parsedEvent);
				setEvent(parsedEvent);
				setComments(parsedEvent.comments);
				setIsLoading(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async () => {
		try {
			const response = await axios.delete(`${API_URL}/api/events/${eventId}`);
			if (response.status === 202) {
				navigate("/events");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchOneEvent();
	}, []);

	return (
		<>
			{!isLoading ? (
				<>
					<h1>Event Details</h1>
					<p>{event.title}</p>
					<p>{event.description}</p>
					<p>{event.location}</p>
					<p>{event.userId.username}</p>
					<Comments
						comments={comments}
						setComments={setComments}
						eventId={eventId}
						// user={user}
					/>
					<button type="button" onClick={handleDelete}>
						Erase this event from the face of Middle Earth
					</button>
				</>
			) : (
				<h2>Loading ...</h2>
			)}
		</>
	);
};
export default EventDetailsPage;
