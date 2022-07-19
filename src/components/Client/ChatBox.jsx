import React, { useContext, useState } from "react";
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
import { UserContext } from "utils/Context";
import axios from "axios";
const ChatBox = () => {
	const [message, setMessage] = useState("");
	const { selectedUser, headers, setSelectedUser } = useContext(UserContext);

	const handleSend = (e) => {
		e.preventDefault();
		axios
			.post(
				"http://206.189.91.54/api/v1/messages",
				{
					receiver_id: selectedUser.receiver_id,
					receiver_class: "User",
					body: message,
				},
				{ headers: headers }
			)
			.then((resp) => {
				console.log("send: ");
			})
			.catch((err) => console.log(err));
		axios
			.get(
				`http://206.189.91.54/api/v1/messages?receiver_id=${selectedUser.receiver_id}&receiver_class=User`,
				{
					headers: headers,
				}
			)
			.then((resp) => {
				console.log(resp.data.data);
				setSelectedUser((state) => {
					return { ...state, conversation: resp.data.data };
				});
			})
			.catch((err) => console.log(err));
		setMessage("");
	};
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
						<Heading fontSize={"md"}> {selectedUser.email} </Heading>
					</Flex>
					<SettingsIcon mr={4} />
				</Flex>
				<Box h={"90%"}>
					<Box h={"90%"}>
						{selectedUser.conversation &&
							selectedUser.conversation.map((item) => {
								
								return item.receiver.id !== selectedUser.receiver_id ? (
									<Box color={"yellow"}>{item.body}</Box>
								) : (
									<Box>{item.body}</Box>
								);
							})}
					</Box>
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
