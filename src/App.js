import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "utils/Context";
import LandingPage from "./pages/LandingPage/index";
import Client from "./pages/Client/Client";
import PrivateRoute from "routes/PrivateRoute";

const App = () => {
	/* These are the necessary data needed to be saved in the local localStorage */
	/* userData = the data response from login api call -> user ID is needed later on */
	/* headers = this will be reused a lot of times for the other api calls */
	/* auth = this is a state to check whether the user is logged in or not */
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem("user"))
	);
	const [headers, setHeaders] = useState(
		JSON.parse(localStorage.getItem("headers"))
	);
	const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
	const [selectedUser, setSelectedUser] = useState({})

	/* This useEffect happens whenever a state is being changed or manipulated */
	/* What this does is it basically updates the local storage whenver there is a change in the states */
	useEffect(() => {
		localStorage.setItem("auth", JSON.stringify(auth));
		localStorage.setItem("user", JSON.stringify(userData));
		localStorage.setItem("headers", JSON.stringify(headers));
	}, [auth, userData, headers]);

	/*UserContext is placed at the very top of the app so it could be accessed by components that need it*/
	/*Private route is to secure the website from being accessed even if you are logged out, if auth is true, can proceed to client page, else redirect to landing page*/
	return (
		<UserContext.Provider
			value={{ userData, setUserData, auth, setAuth, headers, setHeaders , selectedUser, setSelectedUser}}
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
