import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";

const NavBar = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar">
        <Link to="/events">
          <img className="logo" src="../src/assets/Logo-white.png" alt="logo" />
        </Link>

        <ul className="links">
          <li>
            <Link to="/signup">
              <h4>Signup</h4>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <h4>Events</h4>
            </Link>
          </li>
          <li>
            <Link to="/events/new">
              <h4>New Event</h4>
            </Link>
          </li>
          <li>
            {isLoggedIn && (
              <Link to={`/${user._id}`}>
                <h4>Profile</h4>
              </Link>
            )}
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
