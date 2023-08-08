import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();

  const fetchOneEvent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/events/${eventId}`
      );
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
      const response = await axios.delete(
        `http://localhost:5005/api/events/${eventId}`
      );
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
      <button type="button" onClick={handleDelete}>
        Erase this event from the face of Middle Earth
      </button>

      <Link to={`/events/${eventId}/update`}>
        <button type="button">Update Event</button>
      </Link>
    </>
  );
};
export default EventDetailsPage;
