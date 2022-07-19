import React from "react";
import {
	Box,
	Center,
	GridItem,
	Avatar,
	Flex,
	Heading,
	Input,
	Container,
	Textarea,
	Button,
	FormControl,
	IconButton,
} from "@chakra-ui/react";
import { SettingsIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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
					h={"10%"}
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
				<Box h={"90%"}>
					<Box h={"90%"}></Box>
					<FormControl h={"10%"} paddingY={1} paddingX={2}>
						<Flex gap={2}>
							<Textarea
								rows={1}
								resize="none"
								size={"sm"}
								borderRadius={20}
								placeholder="Aa"
								bgColor={"white"}
								css={{
									"&::-webkit-scrollbar": {
										width: "0px",
										background: "transparent",
									},
								}}
							/>
							<IconButton
								borderRadius={20}
								bgColor="yellow.400"
								icon={<ArrowForwardIcon />}
							/>
						</Flex>
					</FormControl>
				</Box>
			</GridItem>
		</>
	);
};

export default ChatBox;
