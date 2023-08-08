import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import NewComment from "../components/NewComment";
import { API_URL } from "../config/config.index";

const EventDetailsPage = () => {
	const { eventId } = useParams();
	const [event, setEvent] = useState([]);
	const navigate = useNavigate();

	const fetchOneEvent = async () => {
		try {
			const response = await axios.get(`${API_URL}/api/events/${eventId}`);
			if (response.status === 200) {
				const parsedEvent = await response.data;
				setEvent(parsedEvent);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async () => {
		try {
			const response = await axios.delete(`${API_URL}/api/events/${eventId}`);
			if (response.status === 202) {
				//Here we don't need any data because we are deleting an student, not using its data for anything. Instead, we navigate to the allStudents page
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
			<h1>Event Details</h1>
			<p>{event.title}</p>
			<p>{event.description}</p>
			<p>{event.location}</p>
			<p>{event.userId}</p>
			<Comments eventId={eventId} />
			<NewComment />
			<button type="button" onClick={handleDelete}>
				Erase this event from the face of Middle Earth
			</button>
		</>
	);
};

export default EventDetailsPage;
