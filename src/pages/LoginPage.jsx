import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api/auth/login";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const { authenticateUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.prevenDefault();
		try {
			const { data } = await axios.post(API_URL, { username, password });
			console.log("Login response: ", data);
			localStorage.setItem("authToken", data.token);
			await authenticateUser();
			/* TODO: change to proper redirection */
			navigate("/");
		} catch (error) {
			console.log("Error on handleLogin: ", error);
			setErrorMessage(error.response.data.errorMessage);
		}
	};

	return (
		<>
			<h1>This is the login page</h1>
			<form onSubmit={handleLogin}>
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
					Password:
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						name="password"
						type="password"
					/>
				</label>
			</form>
		</>
	);
};

export default LoginPage;
