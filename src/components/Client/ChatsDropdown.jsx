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
	const { headers, userData } = useContext(UserContext);
	const { allUsers, filtered, setSelectedConversation, selectedConversation } =
		useContext(ConvoContext);
	const handleSelect = (item) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: item.email,
				id: item.id,
				receiver_class: item.type,
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
						{filtered &&
							filtered.map((item, index) => {
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
										key={index}
										message={item[item.length-1].body}
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
