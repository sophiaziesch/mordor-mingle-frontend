import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/config.index";

const NewEvent = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const [selectedLocation, setSelectedLocation] = useState("Edoras");
	const [locationOptions, setLocationOptions] = useState([]);
	const [userId, setUserId] = useState(""); // Add userName state

	const getUserId = async (token) => {
		const response = await axios.get(`${API_URL}/api/getUser`, {
			headers: { authorization: `Bearer ${token}` },
		});
		console.log("Response.data in getUserId", response.data.userId.userId);
		setUserId(response.data.userId.userId);
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
				userId,
			};
			console.log("userId after handleSubmit: ", userId);

			const response = await fetch(`${API_URL}/api/events`, {
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
		<div className="form-container">
			<h1>New Event</h1>
			<form className="flex-form" onSubmit={handleSubmit}>
				<label>
					<h3>Event Location:</h3>
					<select
						value={selectedLocation}
						onChange={(e) => setSelectedLocation(e.target.value)}
					>
						{locationOptions.map((location, index) => (
							<option key={index} value={location}>
								{location}
							</option>
						))}
					</select>
				</label>

				<label>
					<h3>Title:</h3>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>

				<label>
					<h3>Description:</h3>
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="description"
					/>
				</label>

				<label>
					<h3>Date:</h3>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						placeholder="date"
					/>
				</label>

				<button className="button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewEvent;
