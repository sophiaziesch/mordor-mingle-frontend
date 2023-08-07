import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/events");
      //console.log(response.data);

      const parsedEvents = await response.data;
      setEvents(parsedEvents);
      console.log(events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return events ? (
    <>
      <h1>Events Page </h1>
      {events.map((oneEvent) => {
        return (
          <Link key={oneEvent._id} to={`/events/${oneEvent._id}`}>
            <h1>{oneEvent.title}</h1>
            <p>{oneEvent.description}</p>
            <p>{oneEvent.date}</p>
            <p>{oneEvent.location}</p>
          </Link>
        );
      })}
    </>
  ) : (
    <h1> Loading ...</h1>
  );
};

export default EventsPage;
