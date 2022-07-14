import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://206.189.91.54/api/v1";
const useFetch = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const postFetch = (end, body) => {
		setLoading(true);
		axios
			.post(`${BASE_URL}/${end}`, body)
			.then((resp) => {
				console.log(resp)
				setData(resp.data);
				navigate("/client");
			})
			.catch((err) => {
				console.log(err.response.data.errors);
				console.log(body)
				setError(err.response.data.errors);
			})
			.finally(() => setLoading(false));
	};

	return { data, loading, error, postFetch };
};

export default useFetch;
