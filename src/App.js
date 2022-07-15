import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import Client from "./pages/Client";
import PrivateRoute from "routes/PrivateRoute";

const App = () => {
	return (
		<Routes>
			<Route index path="/" element={<LandingPage />} />
			<Route element={<PrivateRoute />}>
				<Route path="/client" element={<Client />} />
			</Route>
		</Routes>
	);
};

export default App;
