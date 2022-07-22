import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Box,
	GridItem,
	Avatar,
	Flex,
	Heading,
	Textarea,
	FormControl,
	IconButton,
} from "@chakra-ui/react";
import { SettingsIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { UserContext, ConvoContext } from "utils/Context";
import axios from "axios";

const ChatBox = () => {
	const [message, setMessage] = useState("");
	const { headers } = useContext(UserContext);
	const { chatList, selectedConversation } = useContext(ConvoContext);
	const boxElem = useRef();

	const handleSend = (e) => {
		e.preventDefault();
		console.log(selectedConversation);
		axios
			.post(
				"http://206.189.91.54/api/v1/messages",
				{
					receiver_id: selectedConversation.id,
					receiver_class: selectedConversation.receiver_class,
					body: message,
				},
				{ headers: headers }
			)
			.then((resp) => {
				console.log("send: ");
			})
			.catch((err) => console.log(err));
		setMessage("");
	};

	// this is to make chat box to start scrolling from the bottom
	if (boxElem.current) {
		boxElem.current.scrollTop = boxElem.current.scrollHeight;
	}
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
						<Heading fontSize={"md"}> {selectedConversation.email} </Heading>
					</Flex>
					<SettingsIcon mr={4} />
				</Flex>
				<Box h={"90%"}>
					<Flex
						flexDir={"column"}
						h={"90%"}
						overflow="scroll"
						overflowX={"hidden"}
						pt="2"
						ref={boxElem}
					>
						{chatList &&
							chatList.map((item, index) => {
								return item.receiver.id !== selectedConversation.id ? (
									<Flex paddingX={5} justifyContent={"flex-start"} key={index}>
										<Box
											maxWidth="12rem"
											overflowWrap={"break-word"}
											bgColor={"white"}
											width={"max-content"}
											padding="1"
											paddingX={"3"}
											borderRadius={"10"}
										>
											{item.body}
										</Box>
									</Flex>
								) : (
									<Flex paddingX={5} justifyContent={"flex-end"} my="1">
										<Box
											maxWidth="12rem"
											overflowWrap={"break-word"}
											bgColor={"yellow.200"}
											width={"max-content"}
											padding="1"
											paddingX={"3"}
											borderRadius={"10"}
										>
											<p>{item.body}</p>
										</Box>
									</Flex>
								);
							})}
					</Flex>
					<FormControl h={"10%"} paddingY={1} paddingX={2}>
						<Flex gap={2}>
							<Textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
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
								onClick={handleSend}
							/>
						</Flex>
					</FormControl>
				</Box>
			</GridItem>
		</>
	);
};

export default ChatBox;
