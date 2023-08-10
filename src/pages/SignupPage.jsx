import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config.index";

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
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        console.log("Signup response:", response);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error on signup handleSignup: ", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Signup page</h1>
      <form className="flex-form" onSubmit={handleSignup}>
        <label>
          <h3>Username:</h3>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <label>
          <h3>Email:</h3>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            type="email"
          />
        </label>
        <label>
          <h3>Password:</h3>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <button className="button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
