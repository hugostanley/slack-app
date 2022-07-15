import React, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import {UserContext} from 'utils/Context'

const PrivateRoute = () => {
	const {auth} = useContext(UserContext)
	return auth ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
