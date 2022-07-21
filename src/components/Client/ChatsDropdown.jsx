import React, { useContext, useEffect, useState } from "react";
import {
	Accordion,
	AccordionPanel,
	AccordionIcon,
	AccordionButton,
	AccordionItem,
	Text,
	Box,
	Flex,
} from "@chakra-ui/react";
import ChatsItem from "../Client/ChatsPanelItem";
import { UserContext } from "utils/Context";
import axios from "axios";

const ChatsDropdown = ({ title }) => {
	const [filtered, setFiltered] = useState([]);
	const { headers, setSelectedConversation, selectedConversation, userData } =
		useContext(UserContext);

	const getit = (allUsers) => {
		if (allUsers.length > 0) {
			for (let i = allUsers.length - 500; i < allUsers.length; i++) {
				let current = allUsers[i];
				axios
					.get(
						`http://206.189.91.54/api/v1/messages?receiver_id=${current.id}&receiver_class=User`,
						{ headers: headers }
					)
					.then((resp) => {
						if (resp.data.data.length !== 0) {
							if (
								resp.data.data[0].receiver.email === "try@gmail.com" ||
								resp.data.data[0].sender.email === "try@gmail.com"
							) {
								setFiltered((state) => {
									return [...state, resp.data.data];
								});
								console.log("yo");
							} else {
								console.log("not this one");
							}
						}
					})
					.catch();
			}
		}
	};
	/*
	useEffect(() => {
		axios
			.get("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				getit(resp.data.data);
			})
			.catch((err) => console.log(err));

	}, []);
	*/
	const handleSelect = (email, id) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: email,
				id: id,
				receiver_class: "User",
				body: "",
			};
		});
	};

	useEffect(() => {
		console.log(selectedConversation);
	}, [selectedConversation]);

	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem borderTop={"none"}>
				<AccordionButton _hover={{ background: "none" }} paddingX="1" mt={1}>
					<Box flex="1" textAlign="left">
						<Text fontWeight={"bold"} fontSize={"sm"}>
							{title}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pl={1}>
					<Flex gap={1} flexDir={"column"}>
						{filtered &&
							filtered.map((item) => {
								let id =
									item[0].receiver.id === userData.data.id
										? item[0].sender.id
										: item[0].receiver.id;

								let email =
									item[0].receiver.email === userData.data.email
										? item[0].sender.email
										: item[0].receiver.email;
								return (
									<ChatsItem
										source={"https://bit.ly/dan-abramov"}
										name={email}
										handleSelect={handleSelect}
										email={email}
										id={id}
									/>
								);
							})}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChatsDropdown;
