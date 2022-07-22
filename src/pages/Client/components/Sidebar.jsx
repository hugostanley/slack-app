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
import ChannelsDropdown from "./ChannelsDropdown";
import { UserContext, ConvoContext } from "utils/Context";
const SideBar = () => {
	const { headers } = useContext(UserContext);
	const { setSelectedConversation, chatList, allUsers } = useContext(ConvoContext);
	const [searchInput, setSearchInput] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSelect = (item) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: item.email,
				id: item.id,
				receiver_class: item.type,
				body: "",
			};
		});
	};

	useEffect(() => {
		setFilteredUsers(
			allUsers.filter((val) => val.email.toLowerCase().includes(searchInput))
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
						<Tab fontSize={"xs"} >
							Search
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p={-5}>
							<ChannelsDropdown title={"Channels"} />
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
									<Center h={"75vh"}>
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
												onClick={() => handleSelect({email:item.email, id:item.id, type:"User"})}
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
