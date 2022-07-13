import React from "react";
import {
	Grid,
	GridItem,
	Heading,
	Input,
} from "@chakra-ui/react";
import ChatsDropdown from "../components/Client/ChatsDropdown";
import SideBar from '../components/Client/SideBar'
const Client = () => {
	return (
		<Grid
			templateAreas={`"nav main"`}
			gridTemplateColumns={"25vw 75vw"}
			gridTemplateRows={"100vh"}
			h="100vh"
		>
			<SideBar />
			<GridItem bg={"gray.300"} area={"main"}>
				hi
			</GridItem>
		</Grid>
	);
};

export default Client;
