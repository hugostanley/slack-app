import React, { useContext, useState, useEffect } from "react";
import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	useDisclosure,
	ModalHeader,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	Flex,
	Wrap,
	WrapItem,
	Center,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ConvoContext, UserContext } from "utils/Context";
import axios from "axios";

const NewChannelModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [channelName, setChannelName] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const { allUsers } = useContext(ConvoContext);
	const { headers, userData } = useContext(UserContext);

	const [newList, setNewList] = useState([]);

	useEffect(() => {
		setNewList((state) => [...allUsers]);
	}, [allUsers]);

	useEffect(() => {
		if (newList.length > 0) {
			setFilteredUsers(
				newList.filter((val) => val.email.toLowerCase().includes(searchInput))
			);
		}
	}, [searchInput]);

	const handleAdd = () => {
		if (searchInput) {
			setSelectedUsers((state) => {
				let idx = newList.findIndex((item) => item.email === searchInput);
				return [...state, newList[idx]];
			});
			setNewList((state) => state.filter((item) => item.email !== searchInput));
			setSearchInput("");
		}
	};

	const handleClick = () => {
		let ids = selectedUsers.flatMap(Object.values).filter((item, index) => {
			return index % 2 !== 0;
		});
		ids.push(userData.data.id);

		axios
			.post(
				"http://206.189.91.54/api/v1/channels",
				{
					name: channelName,
					user_ids: ids,
				},
				{ headers }
			)
			.then((resp) => {
				console.log(resp);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		console.log(newList);
	}, [newList]);
	return (
		<>
			<Button size={"3xs"} bgColor="transparent" onClick={onOpen}>
				<PlusSquareIcon w="6" h="6" />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent pb={"5"}>
					<ModalHeader>New Channel</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel htmlFor="channel">Channel Name </FormLabel>
							<Input
								id="channel"
								value={channelName}
								onChange={(e) => setChannelName(e.target.value)}
							/>
							<FormLabel htmlFor="searchInput"> Add Users </FormLabel>
							<Flex gap={"3"}>
								<Input
									id="searchInput"
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
									list="users"
								/>
								<datalist id="users">
									{filteredUsers &&
										filteredUsers.map((item) => {
											return <option value={item.email} />;
										})}
								</datalist>
								<Button colorScheme={"yellow"} onClick={handleAdd}>
									{" "}
									+
								</Button>
							</Flex>
							<Wrap mt={"5"}>
								{selectedUsers &&
									selectedUsers.map((item) => {
										return (
											<WrapItem>
												<Center
													borderRadius={"7"}
													px="2"
													bgColor={"gray.200"}
													h={"2rem"}
													width={"max-content"}
												>
													{item.email}
												</Center>
											</WrapItem>
										);
									})}
							</Wrap>
							<Center mt={"3"}>
								<Button onClick={handleClick}  colorScheme={"yellow"}>
									{" "}
									Create{" "}
								</Button>
							</Center>
						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NewChannelModal;
