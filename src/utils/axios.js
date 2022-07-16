import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./Context";
import React from "react";

const useAuth = () => {
	const { headers } = useContext(UserContext);
	const authToken = axios.create({
		baseURL: "http://206.189.91.54/api/v1",
		headers: headers,
	});
	return authToken
};


export default useAuth
