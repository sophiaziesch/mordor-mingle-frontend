import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { API_URL } from "../config/config.index";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");

  const originalDate = new Date(event.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);

  const fetchOneEvent = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/events/${eventId}`);
      if (response.status === 200) {
        const parsedEvent = await response.data;
        // console.log(parsedEvent);
        setEvent(parsedEvent);
        setComments(parsedEvent.comments);
        // console.log("this is the id", parsedEvent.userId);
        setUserId(parsedEvent.userId);
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
      {!isLoading ? (
        <div className="events-container">
          <div className="individual-event">
            <h1>{event.title}</h1>
            <h3>Event Location:</h3> <h4>{event.location} </h4>
            <h3>Event Date:</h3> <h4>{formattedDate} </h4>
            <h3>Event Description:</h3>
            <h4>{event.description}</h4>
            <h3>Created by:</h3>
            <h4>{userId.username}</h4>
            <Comments
              comments={comments}
              setComments={setComments}
              eventId={eventId}
            />
            <button className="button" type="button" onClick={handleDelete}>
              Erase this event
            </button>
            <Link to={`/events/${eventId}/update`}>
              <button className="button" type="button">
                Update Event
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </>
  );
};
export default EventDetailsPage;
