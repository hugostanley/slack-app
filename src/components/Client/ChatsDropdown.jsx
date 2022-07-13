import React from "react";
import {
	Accordion,
	AccordionPanel,
	AccordionIcon,
	AccordionButton,
	AccordionItem,
	Text,
	Box,
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
					<ChatsItem />
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChatsDropdown;
