import React from "react";
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

const ChatsPanel = ({name, source, handleSelect, email, id}) => {
	return (
		<Flex p={2} bg={'gray.100'} borderRadius={10} cursor='pointer' onClick={()=>handleSelect(email,id)}>
			<Avatar size={"sm"} src={source} />
			<Flex flexDir="column" ml={2} justifyContent='center'>
				<Heading as={'h4'} fontSize={'xs'}>{name}</Heading>
				<Text fontSize={'x-small'}> I am so down for this </Text>
			</Flex>
		</Flex>
	);
};

export default ChatsPanel;
