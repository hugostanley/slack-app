import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/Context";

const BASE_URL = "http://206.189.91.54/api/v1";

const useFetch = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const { setAuth, setHeaders, setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	const postFetch = (end, body) => {
		setLoading(true);
		axios
			.post(`${BASE_URL}/${end}`, body)
			.then((resp) => {
				setData(resp.data);
				setUserData(resp.data);
				navigate("/client");
				setAuth(true);
				setHeaders(resp.headers);
			})
			.catch((err) => {
				setError(err.response.data.errors);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const postRegister = (end, body) => {
		setLoading(true);
		axios
			.post(`${BASE_URL}/${end}`, body)
			.then(() => setSuccess(true))
			.catch((err) => {
				setError(err.response.data.errors);
			})
			.finally(() => {
				setError(null);
				setLoading(false);
			});
	};

	return { success, data, loading, error, postFetch, postRegister };
};

export default useFetch;
