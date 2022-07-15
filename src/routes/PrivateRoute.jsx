import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
	const [auth, setAuth] = useState(false);
	return <div></div>;
};

export default PrivateRoute;
