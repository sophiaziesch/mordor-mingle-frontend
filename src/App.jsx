import "./App.css";
import EventDetailsPage from "./pages/EventsDetailsPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { Link, Route, Routes } from "react-router-dom";
import UpdateEvent from "./pages/UpdateEvent";
import NewEvent from "./pages/NewEvent";

function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/events">Events</Link>
          <Link to="/events/new">New Event</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/events/:eventId/update" element={<UpdateEvent />} />
        <Route path="/events/new" element={<NewEvent />} />
        <Route path="/:userId" element={<UserProfilePage />} />
        <Route path="/:userId/update" element={<UpdateProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
