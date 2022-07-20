import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
	Box,
	Flex,
	GridItem,
	Center,
	Heading,
	Input,
	TabPanels,
	TabPanel,
	Tabs,
	TabList,
	Tab,
	Avatar,
	Spinner,
} from "@chakra-ui/react";
import ChatsDropdown from "components/Client/ChatsDropdown";
import { UserContext } from "utils/Context";
const SideBar = () => {
	const {
		headers,
		setSelectedConversation,
		selectedConversation,
		chatList,
		setChatList,
	} = useContext(UserContext);
	const [searchInput, setSearchInput] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [usersList, setUsersList] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUsers = () => {
		setLoading(true);
		axios("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				setUsersList(resp.data.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		setFilteredUsers(
			usersList.filter((val) => val.email.toLowerCase().includes(searchInput))
		);
	}, [searchInput]);
	const handleSelect = (item) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: item.email,
				id: item.id,
				receiver_class: "User",
				body: "",
			};
		});
	};

	useEffect(() => {
		axios
			.get(
				`http://206.189.91.54/api/v1/messages?receiver_id=${selectedConversation.id}&receiver_class=User`,
				{
					headers: headers,
				}
			)
			.then((resp) => {
				setChatList(resp.data.data);
			})
			.catch((err) => console.log(err));
	}, [selectedConversation]);
	return (
		<>
			<GridItem p={3} area={"nav"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Heading as={"h2"} size="md" marginLeft={2}>
						Chats
					</Heading>
				</Flex>
				<Tabs>
					<TabList>
						<Tab fontSize={"xs"}>Messages</Tab>
						<Tab fontSize={"xs"} onClick={getUsers}>
							Search
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p={-5}>
							{/*
							<ChatsDropdown title={"Channels"} />
							*/}
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
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<Box
								minH={"78vh"}
								maxH={"78vh"}
								overflow="auto"
								overflowX="hidden"
							>
								{loading ? (
									<Center h={'75vh'}>
										<Spinner />
									</Center>
								) : (
									filteredUsers.map((item) => {
										return (
											<Flex
												alignItems={"center"}
												gap={"1"}
												padding={2}
												borderRadius="5"
												cursor={"pointer"}
												_hover={{ backgroundColor: "gray.300" }}
												onClick={() => handleSelect(item)}
												key={item.id}
											>
												<Avatar src="https://bit.ly/broken-link" size={"sm"} />
												<p>{item.email}</p>
											</Flex>
										);
									})
								)}
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</GridItem>
		</>
	);
};

export default SideBar;
