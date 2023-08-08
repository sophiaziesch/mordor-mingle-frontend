import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewEvent = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const [selectedLocation, setSelectedLocation] = useState("");
	const [locationOptions, setLocationOptions] = useState([]);
	const [userId, setUserId] = useState(""); // Add userName state

	const getUserId = async (token) => {
		const { data } = await axios.get("http://localhost:5005/api/getUser", {
			headers: { authorization: `Bearer ${token}` },
		});
		console.log(data);
		setUserId(data);
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

		const accessToken = localStorage.getItem("authToken");
		if (accessToken) {
			//console.log(accessToken);
			getUserId(accessToken);
		}

		setLocationOptions(enumLocations);
	}, []);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const newEvent = {
				title,
				description,
				date,
				location: selectedLocation,
				//userId,
			};

			const response = await fetch("http://localhost:5005/api/events", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newEvent),
			});
			console.log("New event response:", response);
			const parsed = await response.json();
			console.log(parsed.data);
			navigate(`/events/${parsed._id}`);

			//We are posting our data (called response) into our API using a fetch with a method 'POST'. We are saving the data in a variable named parsed that is going to await the response from our server
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<h1>New Event</h1>
			<form onSubmit={handleSubmit}>
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

export default NewEvent;
