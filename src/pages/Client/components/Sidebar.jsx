import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
	Box,
	Flex,
	GridItem,
	Heading,
	Input,
	TabPanels,
	TabPanel,
	Tabs,
	TabList,
	Tab,
} from "@chakra-ui/react";
import ChatsDropdown from "components/Client/ChatsDropdown";
import { UserContext } from "utils/Context";
const SideBar = () => {
	const [emailInput, setEmailInput] = useState("");
	const [message, setMessage] = useState("");
	const { headers } = useContext(UserContext);
	const [searchInput, setSearchInput] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [usersList, setUsersList] = useState([]);

	const getUsers = () => {
		axios("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				setUsersList(resp.data.data);
			})
			.catch((err) => console.log(err));
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

	useEffect(() => {
		setFilteredUsers(
			usersList.filter((val) => val.email.toLowerCase().includes(searchInput))
		);
	}, [searchInput]);
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
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<Box
								minH={"78vh"}
								maxH={"78vh"}
								overflow="auto"
								overflowX="hidden"
							>
								{filteredUsers.map((item) => {
									return <p>{item.email}</p>;
								})}
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</GridItem>
		</>
	);
};

export default SideBar;
