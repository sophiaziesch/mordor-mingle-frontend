import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
import { AuthContext } from "../contexts/Auth.context";
import { API_URL } from "../config/config.index";

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
				const response = await axios.get(`${API_URL}/api/auth/${userId}`, {
					headers: { authorization: `Bearer ${tokenStored}` },
				});
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

	const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

	return fetchedUser ? (
		<div className="profile-container">
			{/* <Image
          cloudName={cloudName}
          publicId={fetchedUser.profileImage}
          height="150"
          crop="thumb"
        /> */}

			<h1>Welcome, {fetchedUser.username}!</h1>

			<div className="profile-info">
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
			</div>
			<button className="button" onClick={() => navigate(`/${userId}/update`)}>
				Update
			</button>
		</div>
	) : (
		<h1>Loading...</h1>
	);
};

export default UserProfilePage;
