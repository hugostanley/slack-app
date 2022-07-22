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
import { UserContext, ConvoContext } from "utils/Context";


const ChatsDropdown = ({ title }) => {
	const { headers, setSelectedConversation, selectedConversation, userData } =
		useContext(UserContext);
	const { allUsers, filtered } = useContext(ConvoContext);
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
						{ filtered&&
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
										key={id}
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
