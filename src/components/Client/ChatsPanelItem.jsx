import React from "react";
import { Avatar, AvatarGroup, Flex, Heading, Text } from "@chakra-ui/react";

const ChatsPanel = ({
	type,
	message,
	name,
	source,
	handleSelect,
	email,
	id,
}) => {
	const handleClick = () => {
		if (type === "Channel") {
			handleSelect({ id, type, name });
		} else {
			handleSelect({ email, id, type: "User" });
		}
	};
	return (
		<Flex
			p={2}
			bg={"gray.100"}
			borderRadius={10}
			cursor="pointer"
			onClick={handleClick}
		>
			{type === "Channel" ? (
				<AvatarGroup size={"sm"} max={2}>
					<Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
					<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
					<Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
					<Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
					<Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
				</AvatarGroup>
			) : (
				<Avatar
					size={"sm"}
					name={name.charAt(0)}
					src={"https://bit.ly/broken-link"}
				/>
			)}
			<Flex flexDir="column" ml={2} justifyContent="center">
				<Heading as={"h4"} fontSize={"xs"}>
					{name}
				</Heading>
				<Text fontSize={"x-small"}> {message} </Text>
			</Flex>
		</Flex>
	);
};

export default ChatsPanel;
