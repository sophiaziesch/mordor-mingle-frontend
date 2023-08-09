import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="../src/assets/Logo-white.png" alt="logo" />
        <ul>
          <div className="links">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/events/new">New Event</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
