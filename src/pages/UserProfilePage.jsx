//WORKING
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";

const UserProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [fetchedUser, setFetchedtUser] = useState(null);
  const { user } = useContext(AuthContext);

  console.log("user on userprofilepage:", user);

  useEffect(() => {
    const fetchUser = async () => {
      const tokenStored = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `http://localhost:5005/api/auth/${userId}`,
          {
            headers: { authorization: `Bearer ${tokenStored}` },
          }
        );
        if (response.status === 200) {
          console.log("user response", response.data);
          setFetchedtUser(response.data);
        } else {
          console.error("Invalid userId");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return fetchedUser ? (
    <div className="events-container">
      <div className="individual-event-profile">
        {/* <Image
          cloudName={cloudName}
          publicId={fetchedUser.profileImage}
          height="150"
          crop="thumb"
        /> */}
        <img
          src={fetchedUser.profileImage}
          alt={fetchedUser.username}
          width="200"
        />

        <h1>Welcome, {fetchedUser.username}!</h1>

        <h3>Race: {fetchedUser.race}</h3>

        <h3>Email: {fetchedUser.email}</h3>
        <h3>Events Created:</h3>
        {fetchedUser.eventsCreated && fetchedUser.eventsCreated.length > 0 ? (
          <ul>
            {fetchedUser.eventsCreated.map((event) => (
              <li key={event._id}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events created yet.</p>
        )}
        <h3>Events Liked:</h3>
        {fetchedUser.eventsLiked && fetchedUser.eventsLiked.length > 0 ? (
          <ul>
            {fetchedUser.eventsLiked.map((event) => (
              <li key={event._id}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p>{event.location}</p>
                <p>{event.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events liked yet.</p>
        )}

        <button
          className="button"
          onClick={() => navigate(`/${userId}/update`)}
        >
          Update
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserProfilePage;
