import React from "react";
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

const ChatsPanel = ({type, message, name, source, handleSelect, email, id}) => {
	const handleClick = ()=> {
		if(type === 'Channel'){
			handleSelect({id, type, name})
		} else {
			handleSelect({email, id, type:"User"})
		}
	}
	return (
		<Flex p={2} bg={'gray.100'} borderRadius={10} cursor='pointer' onClick={handleClick}>
			<Avatar size={"sm"} src={source} />
			<Flex flexDir="column" ml={2} justifyContent='center'>
				<Heading as={'h4'} fontSize={'xs'}>{name}</Heading>
				<Text fontSize={'x-small'}> {message} </Text>
			</Flex>
		</Flex>
	);
};

export default ChatsPanel;
