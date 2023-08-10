import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/config.index";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/events`);
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
      <h1 className="events-page-h1">Events Page </h1>
      <div className="events-container">
        {events.map((oneEvent) => {
          return (
            <div className="individual-event" key={oneEvent._id}>
              <Link to={`/events/${oneEvent._id}`}>
                <h2>{oneEvent.title}</h2>
                <h3>Event Description:</h3>
                <h4>{oneEvent.description}</h4>
                <h3>Event Date:</h3> <h4>{oneEvent.date} </h4>
                <h3>Event Location:</h3> <h4>{oneEvent.location} </h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <h1> Loading ...</h1>
  );
};

export default EventsPage;
