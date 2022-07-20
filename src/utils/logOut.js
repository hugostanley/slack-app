import { useContext } from "react";
import { UserContext } from "./Context";

const Logout = () => {
	const { setAuth, setHeaders, setUser } = useContext(UserContext);
	setAuth(false);
	setHeaders({});
	setUser({});
};

export default Logout;
