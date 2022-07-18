import React, { useContext, useState } from "react";
import axios from "axios";
import {
	FormLabel,
	Box,
	Button,
	Flex,
	GridItem,
	Heading,
	IconButton,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	Textarea,
	ModalCloseButton,
	ModalBody,
	ModalHeader,
	ModalFooter,
	FormControl,
} from "@chakra-ui/react";
import ChatsDropdown from "components/Client/ChatsDropdown";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import ProgressModal from "pages/LandingPage/components/ProgressModal";
import { UserContext } from "utils/Context";
const SideBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [emailInput, setEmailInput] = useState("");
	const [message, setMessage] = useState("");
	const { headers } = useContext(UserContext);

	const [usersList, setUsersList] = useState("");
	const getUsers = () => {
		console.log(headers);
		axios("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				setUsersList(resp.data.data);
			})
			.catch((err) => console.log(err));
	};

	const handleAddUser = () => {
		onOpen();
		getUsers();
	};

	const sendMessage = () => {
		axios
			.post(
				"http://206.189.91.54/api/v1/messages",
				{ receiver_id: emailInput, receiver_class: "User", body: message },
				{ headers: headers }
			)
			.then((resp) => console.log(resp))
			.catch((err) => console.log(err));
	};
	const handleSend = (e) => {
		e.preventDefault();
		console.log(message, emailInput)
		sendMessage()
	};
	return (
		<>
			<GridItem p={3} area={"nav"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Heading as={"h2"} size="md" marginLeft={2}>
						Chats
					</Heading>
					<Menu>
						<MenuButton as={IconButton} icon={<EditIcon />} />
						<MenuList>
							<MenuItem icon={<AddIcon />} onClick={handleAddUser}>
								New Direct Message
							</MenuItem>
							<MenuItem icon={<AddIcon />}>New Channel</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
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
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>New Message</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<Box mb={"1rem"}>
								<Input
									placeholder="Please enter the user's email"
									type={"email"}
									value={emailInput}
									onChange={(e) => setEmailInput(e.target.value)}
									list="userList"
								/>
								<datalist id="userList">
									{usersList.map((item) => {
										return (
											<option key={item.id} value={item.id}>
												{item.email}
											</option>
										);
									})}
								</datalist>
							</Box>
							<Box>
								<Textarea
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Type your first message here"
								/>
							</Box>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="yellow" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" onClick={handleSend}>
							Send message
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SideBar;
