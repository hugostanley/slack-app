import React from "react";
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

const ChatsDropdown = ({ title }) => {
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
					<Flex gap={1} flexDir={'column'}>
						<ChatsItem
							source={"https://bit.ly/dan-abramov"}
							name={"Stanley Hugo"}
						/>
						<ChatsItem
							source={"https://bit.ly/tioluwani-kolawole"}
							name={"Jonathan Smith"}
						/>
						<ChatsItem
							source={"https://bit.ly/kent-c-dodds"}
							name={"Jonathan Smith"}
						/>
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChatsDropdown;
