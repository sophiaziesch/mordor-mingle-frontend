import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
import logo from "../assets/Logo-white.png";

const NavBar = () => {
	const { isLoggedIn, user } = useContext(AuthContext);
	return (
		<>
			<nav className="navbar">
				<img className="logo" src={logo} alt="logo" />
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
						<li>{isLoggedIn && <Link to={`/${user._id}`}>Profile</Link>}</li>
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
