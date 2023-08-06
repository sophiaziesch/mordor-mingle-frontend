import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api/auth/signup";

const SignupPage = () => {
	/* States to control inputs */
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignup = async (event) => {
		event.preventDefault();
		/* Send signup information to backend */
		try {
			const response = await axios.post(API_URL, { username, email, password });
			if (response.status === 201) {
				console.log("Signup response:", response);
				navigate("/login");
			}
		} catch (error) {
			console.log("Error on signup handleSignup: ", error);
		}
	};

	return (
		<>
			<h1>Signup page</h1>
			<form onSubmit={handleSignup}>
				<label>
					Username:
					<input
						value={username}
						onChange={(event) => setUsername(event.target.value)}
						name="username"
						type="text"
					/>
				</label>
				<label>
					Email:
					<input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						name="email"
						type="email"
					/>
				</label>
				<label>
					Password:
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						name="password"
						type="password"
					/>
				</label>
				<button type="submit">Sign up</button>
			</form>
		</>
	);
};

export default SignupPage;
