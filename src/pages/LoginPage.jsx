import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import { API_URL } from "../config/config.index";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/login`, {
        username,
        password,
      });
      console.log("Login response: ", data);
      localStorage.setItem("authToken", data.token);
      await authenticateUser();
      /* TODO: change to proper redirection */
      navigate("/events");
    } catch (error) {
      console.log("Error on handleLogin: ", error);
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>

      <form className="flex-form" onSubmit={handleLogin}>
        <label>
          <h3>Username: </h3>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <label>
          <h3>Password: </h3>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
