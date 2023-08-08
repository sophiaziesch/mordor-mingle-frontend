import axios from "axios";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
import { API_URL } from "../config/config.index";

const AuthContextWrapper = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const authenticateUser = async () => {
		const tokenStored = localStorage.getItem("authToken");
		if (tokenStored) {
			try {
				const response = await axios.get(`${API_URL}/api/auth/verify`, {
					headers: { authorization: `Bearer ${tokenStored}` },
				});
				console.log("Verify response from context: ", response.data);
				setUser(response.data.currentUser);
				setIsLoading(false);
				setIsLoggedIn(true);
			} catch (error) {
				console.log("Error on authenticateUser(): ", error);
				setUser(null);
				setIsLoading(false);
				setIsLoggedIn(false);
			}
		} else {
			setUser(null);
			setIsLoading(false);
			setIsLoggedIn(false);
		}
	};

	useEffect(() => {
		authenticateUser();
	}, []);

	return (
		<AuthContext.Provider
			value={{ authenticateUser, user, isLoading, isLoggedIn }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextWrapper };

