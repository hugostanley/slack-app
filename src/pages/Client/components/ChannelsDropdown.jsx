import React, { useContext } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	Box,
	Text,
	AccordionIcon,
	AccordionPanel,
	Flex,
} from "@chakra-ui/react";
import ChatsPanel from "components/Client/ChatsPanelItem";
import { ConvoContext } from "utils/Context";
const ChannelsDropdown = () => {
	const { channels, setSelectedConversation } = useContext(ConvoContext);
	const handleSelect = (item) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: item.name,
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
							{"Channels"}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pl={1}>
					<Flex gap={1} flexDir={"column"}>
						{channels.map((item, index) => {
							return (
								<ChatsPanel
									key={index}
									type={"Channel"}
									name={item.name.replace(/['"]+/g, "")}
									id={item.id}
									handleSelect={handleSelect}
								/>
							);
						})}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChannelsDropdown;
