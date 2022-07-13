import React from "react";
import {
	Grid,
	GridItem,
	Heading,
	Input,
} from "@chakra-ui/react";
import ChatsDropdown from "../components/Client/ChatsDropdown";

const Client = () => {
	return (
		<Grid
			templateAreas={`"nav main"`}
			gridTemplateColumns={"25vw 75vw"}
			gridTemplateRows={"100vh"}
			h="100vh"
		>
			<GridItem p={3} area={"nav"}>
				<Heading as={"h2"} size="md" marginLeft={2}>
					Chats
				</Heading>
				<Input
					borderRadius={"1rem"}
					focusBorderColor="none"
					placeholder="Search"
					size="xs"
					variant={"filled"}
					mt={5}
				/>
				<ChatsDropdown title={"Channels"} />
				<ChatsDropdown title={"Direct Messages"} />
			</GridItem>
			<GridItem bg={"gray.300"} area={"main"}>
				hi
			</GridItem>
		</Grid>
	);
};

export default Client;
