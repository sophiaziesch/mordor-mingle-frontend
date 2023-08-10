import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import { useContext } from "react";

const LogoutButton = () => {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from storage
    localStorage.removeItem("authToken");
    // Perform any other logout-related actions (e.g., redirecting)
    navigate("/login");
    authenticateUser();
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

useContext;
