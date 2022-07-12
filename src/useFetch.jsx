import React, {useEffect, useState} from "react";
import axios from "axios";

const useFetch=()=> {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)

	useEffect(()=>{
		setLoading(true)
		axios.post(url).then(response=> {
			setData(response.data)
		})
	},[])
}

export default useFetch
