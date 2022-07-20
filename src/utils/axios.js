import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./Context";

const useAuth = () => {
	const { headers } = useContext(UserContext);
	const authToken = axios.create({
		baseURL: "http://206.189.91.54/api/v1",
		headers: headers,
	});
	return authToken;
};

// this is how to call this
//authToken
//.get("/users")
//.then((resp) => console.log(resp))
//.catch((err) => console.log(err));

export default useAuth;
