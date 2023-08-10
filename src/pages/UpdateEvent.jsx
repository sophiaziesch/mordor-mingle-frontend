import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/config.index";

const UpdateEvent = () => {
	const navigate = useNavigate();
	const { eventId } = useParams();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const [selectedLocation, setSelectedLocation] = useState("");
	const [locationOptions, setLocationOptions] = useState([]);

	const fetchEvents = async () => {
		try {
			const response = await fetch(`${API_URL}/api/events/${eventId}`); //I call my API to get all the students with the fetch
			if (response.status === 200) {
				const parsedEvents = await response.json(); //If the response is successfull then I get the info from response.json() --> from the back end
				setTitle(parsedEvents.title); //Once I get the info from the back end I use it in my
				setDescription(parsedEvents.description);
				setDate(parsedEvents.date);
				setSelectedLocation(parsedEvents.selectedLocation);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdateEvent = async (event) => {
		event.preventDefault();
		const updatedEvent = {
			selectedLocation,
			title,
			description,
			date,
		};
		console.log(updatedEvent);

		try {
			const response = await fetch(`${API_URL}/api/events/update/${eventId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedEvent),
			});
			const parsed = await response.json(); //We are posting our data (called response) into our API using a fetch with a method 'POST'. We are saving the data in a variable named parsed that is going to await the response from our server
			navigate(`/events/${parsed._id}`);
		} catch (error) {
			console.log(error);
		}
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

		fetchEvents();
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
