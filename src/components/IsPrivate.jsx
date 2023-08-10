import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Auth.context";
import { useNavigate } from "react-router-dom";

function IsPrivate({ children }) {
	const { isLoading, isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			navigate("/login");
		}
	}, [isLoading, isLoggedIn, navigate]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return <div>{children}</div>;
}

export default IsPrivate;
