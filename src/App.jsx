import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/:userId" element={<UserProfilePage />} />
				<Route path="/:userId/update" element={<UpdateProfilePage />} />

			</Routes>
		</>
	);
}

export default App;
