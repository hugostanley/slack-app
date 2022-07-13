import React from "react";
import {
	Box,
	Center,
	GridItem,
	Avatar,
	Flex,
	Heading,
	Input,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
const ChatBox = () => {
	return (
		<>
			<GridItem bg={"gray.300"} area={"main"}>
				<Flex
					alignItems={"center"}
					gap={2}
					w={"100%"}
					p={3}
					boxShadow={"base"}
					bg="whitesmoke"
				>
					<Avatar
						size={"sm"}
						name="Dan Abrahmov"
						src="https://bit.ly/dan-abramov"
					/>

					<Flex alignItems="center" flex={2}>
						<Heading fontSize={"md"}> Stanley Hugo </Heading>
					</Flex>
					<SettingsIcon mr={4} />
				</Flex>
			</GridItem>
		</>
	);
};

export default ChatBox;
