import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../components/Client/SideBar";
import ChatBox from "../components/Client/ChatBox";
const Client = () => {
	return (
		<Grid
			templateAreas={`"nav main"`}
			gridTemplateColumns={"25vw 75vw"}
			gridTemplateRows={"100vh"}
			h="100vh"
		>
			<SideBar />
			<ChatBox />
		</Grid>
	);
};

export default Client;
