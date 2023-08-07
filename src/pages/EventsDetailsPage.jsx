import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState("");

  console.log("here is the id", eventId);
  const fetchOneEvent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/events/${eventId}`
      );
      if (response.status === 200) {
        const parsedEvent = await response.data();
        setEvent(parsedEvent);
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
    </>
  );
};

export default EventDetailsPage;
