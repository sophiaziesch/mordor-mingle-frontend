import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEvent = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState("");

  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/api/events/${eventId}`
      ); //I call my API to get all the students with the fetch
      if (response.status === 200) {
        const parsedEvents = await response.json(); //If the response is successfull then I get the info from response.json() --> from the back end
        setEvents(parsedEvents); //Once I get the info from the back end I use it in my setStudents
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateEvent = async ({ payload }) => {
    const updatedEvent = {
      selectedLocation: payload.selectedLocation,
      title: payload.title,
      description: payload.description,
      date: payload.date,
    };

    const response = fetch(`http://localhost:5005/api/events/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });
    const parsed = await response.json(); //We are posting our data (called response) into our API using a fetch with a method 'POST'. We are saving the data in a variable named parsed that is going to await the response from our server
    navigate(`/events/${parsed._id}`);
  };

  useEffect(() => {
    // Use the predefined enum values as the location options
    const enumLocations = [
      "Edoras",
      "Fangorn",
      "Gondor",
      "Isengard",
      "Minas Tirith",
      "Mordor",
      "Moria",
      "Rivendell",
      "Rohan",
      "The Shire",
    ];

    fetchEvents(setEvents);
    setLocationOptions(enumLocations);
  }, []);

  return (
    <>
      <h1>Update Event</h1>
      <form onSubmit={handleUpdateEvent}>
        <label>
          Event Location:
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select a location</option>
            {locationOptions.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>

        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </label>

        <label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />
        </label>

        <label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="date"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UpdateEvent;
