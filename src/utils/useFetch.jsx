import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserContext} from 'utils/Context'
const BASE_URL = "http://206.189.91.54/api/v1";

const useFetch = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const {setAuth, headers} = useContext(UserContext)

	const postFetch = (end, body) => {
		setLoading(true);
		axios
			.post(`${BASE_URL}/${end}`, body)
			.then((resp) => {
				console.log(resp)
				setData(resp.data);
				navigate("/client");
				setAuth(true)
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
