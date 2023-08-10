import "./App.css";
import EventDetailsPage from "./pages/EventsDetailsPage";
import EventsPage from "./pages/EventsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { Route, Routes } from "react-router-dom";
import UpdateEvent from "./pages/UpdateEvent";
import NewEvent from "./pages/NewEvent";

import NavBar from "./components/NavBar";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/events/:eventId"
          element={
            <IsPrivate>
              <EventDetailsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/events/:eventId/update"
          element={
            <IsPrivate>
              <UpdateEvent />
            </IsPrivate>
          }
        />
        <Route
          path="/events/new"
          element={
            <IsPrivate>
              <NewEvent />
            </IsPrivate>
          }
        />
        <Route path="/:userId" element={<UserProfilePage />} />
        <Route path="/:userId/update" element={<UpdateProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
