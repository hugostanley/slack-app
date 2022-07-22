import React, { useContext, useState } from "react";
import {
	Alert,
	AlertIcon,
	Avatar,
	AvatarGroup,
	Button,
	Center,
	Flex,
	FormLabel,
	Heading,
	IconButton,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, InfoIcon } from "@chakra-ui/icons";
import { ConvoContext } from "utils/Context";
import ProgressModal from "pages/LandingPage/components/ProgressModal";
const ChatsPanel = ({
	handleAdd,
	type,
	message,
	name,
	handleSelect,
	email,
	id,
	success,
	error,
	loading,
}) => {
	const [selectedUser, setSelectedUser] = useState("");
	const { allUsers } = useContext(ConvoContext);
	const handleClick = () => {
		if (type === "Channel") {
			handleSelect({ id, type, name });
		} else {
			handleSelect({ email, id, type: "User" });
		}
	};
	const handlePress = () => {
		if (selectedUser) {
			let idx = allUsers.findIndex((item) => item.email === selectedUser);
			console.log(allUsers[idx].id, id);
			handleAdd(id, allUsers[idx].id);
		}
		setSelectedUser("");
	};
	const { onClose, onOpen, isOpen } = useDisclosure();
	return (
		<>
			<Flex
				p={2}
				bg={"gray.100"}
				borderRadius={10}
				cursor="pointer"
				onClick={handleClick}
				maxW="20rem"
			>
				{type === "Channel" ? (
					<AvatarGroup size={"sm"} max={2}>
						<Avatar src="https://biflorence" />
						<Avatar src="https://biadebayo" />
					</AvatarGroup>
				) : (
					<Avatar
						size={"sm"}
						name={name.charAt(0)}
						src={"https://bit.ly/broken-link"}
					/>
				)}
				<Flex flexGrow={"1"} flexDir="column" ml={2} justifyContent="center">
					<Heading as={"h4"} fontSize={"xs"}>
						{name}
					</Heading>
					<Text fontSize={"x-small"}> {message} </Text>
				</Flex>
				{type === "Channel" ? (
					<Menu flexGrow="2">
						<MenuButton
							variant={"outlined"}
							as={IconButton}
							icon={<InfoIcon />}
						/>
						<MenuList>
							<MenuItem icon={<AddIcon />} onClick={onOpen}>
								Add user
							</MenuItem>
						</MenuList>
					</Menu>
				) : null}
			</Flex>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					{loading ? (
						<ProgressModal />
					) : (
						<>
							<ModalHeader>Add user to {name}</ModalHeader>
							<ModalBody mb={"3"}>
								<FormLabel>User email</FormLabel>
								<Input
									value={selectedUser}
									onChange={(e) => setSelectedUser(e.target.value)}
									list="usersList"
								/>
								<datalist id="usersList">
									{allUsers.map((item) => {
										return <option value={item.email} />;
									})}
								</datalist>
							</ModalBody>
							<Center>
								<Button onClick={handlePress} mb="5">
									{" "}
									Add user{" "}
								</Button>
							</Center>
							{success && (
								<Alert status="success" marginTop={"5"}>
									<AlertIcon />
									User added!
								</Alert>
							)}
							{error && (
								<Alert status="error" marginTop={"5"}>
									<AlertIcon />
									{error}
								</Alert>
							)}
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ChatsPanel;
