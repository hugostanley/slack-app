import React from "react";
import {GridItem, Heading, Input} from '@chakra-ui/react'
import ChatsDropdown from '../Client/ChatsDropdown'
const SideBar = () => {
	return (
		<>
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
				<ChatsDropdown title={"Channels"} />
				<ChatsDropdown title={"Direct Messages"} />
			</GridItem>
		</>
	);
};

export default SideBar
