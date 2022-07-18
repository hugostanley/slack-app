import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import Client from "./pages/Client";
import PrivateRoute from "routes/PrivateRoute";
import { UserContext } from "utils/Context";

const App = () => {
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem("user"))
	);
	const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
	const [headers, setHeaders] = useState(
		JSON.parse(localStorage.getItem("headers"))
	);

	useEffect(() => {
		localStorage.setItem("auth", JSON.stringify(auth));
		localStorage.setItem("user", JSON.stringify(userData));
		localStorage.setItem("headers", JSON.stringify(headers));
	}, [auth, userData, headers]);

	return (
		<UserContext.Provider
			value={{ userData, setUserData, auth, setAuth, headers, setHeaders }}
		>
			<Routes>
				<Route index path="/" element={<LandingPage />} />
				<Route element={<PrivateRoute log={auth} />}>
					<Route path="/client" element={<Client />} />
				</Route>
				<Route path="*" element={<div>none</div>} />
			</Routes>
		</UserContext.Provider>
	);
};

export default App;
