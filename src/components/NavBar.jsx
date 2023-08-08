import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/events">Events</Link>
          <Link to="/events/new">New Event</Link>
          <LogoutButton />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
