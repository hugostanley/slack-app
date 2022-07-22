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
	const { channels } = useContext(ConvoContext);
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
						{/*
									<ChatsPanel
										source={"https://bit.ly/dan-abramov"}
										name={email}
										handleSelect={handleSelect}
										email={email}
										id={id}
										key={id}
									/>
						*/}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChannelsDropdown;
