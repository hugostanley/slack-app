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
	TabPanels,
	TabPanel,
	Tabs,
	TabList,
	Tab,
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
		console.log(message, emailInput);
		sendMessage();
	};
	return (
		<>
			<GridItem p={3} area={"nav"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Heading as={"h2"} size="md" marginLeft={2}>
						Chats
					</Heading>
				</Flex>
				<Tabs >
					<TabList>
						<Tab fontSize={'xs'}>Messages</Tab>
						<Tab fontSize={'xs'}>Search</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p={-5}>
							<ChatsDropdown title={"Channels"} />
							<ChatsDropdown title={"Direct Messages"} />
						</TabPanel>
						<TabPanel p={-5}>
							<Input
								borderRadius={"1rem"}
								focusBorderColor="none"
								placeholder="Search"
								size="xs"
								variant={"filled"}
								mt={2}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</GridItem>
		</>
	);
};

export default SideBar;
