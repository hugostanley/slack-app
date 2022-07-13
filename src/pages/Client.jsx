import React from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	AccordionItem,
	Grid,
	GridItem,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react";

const Client = () => {
	return (
		<Grid
			templateAreas={`"nav main"`}
			gridTemplateColumns={"25vw 75vw"}
			gridTemplateRows={"100vh"}
			h="100vh"
		>
			<GridItem p={3} area={"nav"}>
				<Heading as={"h2"} size="md" marginLeft={2}>
					Chats
				</Heading>
					<Input
						borderRadius={"1rem"}
						focusBorderColor="none"
						placeholder="Search"
						size="xs"
						variant={"filled"}
						mt={5}
					/>

				<Accordion defaultIndex={[0]} allowMultiple>
					<AccordionItem  borderTop={"none"}>
						<AccordionButton _hover={{background: 'none'}} paddingX='1' mt={1}>
							<Box  flex="1" textAlign="left">
								<Text fontWeight={'bold'} fontSize={"sm"}>Channels</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<Accordion defaultIndex={[0]} allowMultiple>
					<AccordionItem  borderTop={"none"}>
						<AccordionButton _hover={{background: 'none'}} paddingX='1' mt={1}>
							<Box  flex="1" textAlign="left">
								<Text fontWeight={'bold'} fontSize={"sm"}>Direct Messages</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</GridItem>
			<GridItem bg={"gray.300"} area={"main"}>
				hi
			</GridItem>
		</Grid>
	);
};

export default Client;
