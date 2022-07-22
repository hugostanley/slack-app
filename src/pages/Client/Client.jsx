import React, { useState, createContext, useContext, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "pages/Client/components/Sidebar";
import ChatBox from "components/Client/ChatBox";
import { UserContext, ConvoContext } from "utils/Context";
import axios from "axios";

const Client = () => {
	const { headers, userData } = useContext(UserContext);
	const [allUsers, setAllUsers] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [channels, setChannels] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState({});
	const [chatList, setChatList] = useState([]);

	const getConvo = (allUsers) => {
		console.log(allUsers);
		for (let i = allUsers.length - 1000; i < allUsers.length; i++) {
			let current = allUsers[i];
			axios
				.get(
					`http://206.189.91.54/api/v1/messages?receiver_id=${current.id}&receiver_class=User`,
					{ headers: headers }
				)
				.then((resp) => {
					if (resp.data.data.length !== 0) {
						if (
							resp.data.data[0].receiver.email === userData.data.email ||
							resp.data.data[0].sender.email === userData.data.email
						) {
							setFiltered((state) => {
								return [...state, resp.data.data];
							});
							console.log("yo");
						} else {
							console.log("not this one");
						}
					}
				})
				.catch();
		}
	};

	useEffect(() => {
		axios
			.get("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				resp.data.data.forEach((item) => {
					setAllUsers((state) => {
						return [...state, { email: item.email, id: item.id }];
					});
				});
			})
			.catch();

		axios
			.get("http://206.189.91.54/api/v1/channels", { headers: headers })
			.then((resp) => {
				setChannels(resp.data.data);
			})
			.catch();
	}, [headers]);

	useEffect(() => {
		if (allUsers.length > 0) {
			getConvo(allUsers);
		}
	}, [allUsers]);

	useEffect(() => {
		axios
			.get(
				`http://206.189.91.54/api/v1/messages?receiver_id=${selectedConversation.id}&receiver_class=${selectedConversation.receiver_class}`,
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
		<ConvoContext.Provider
			value={{
				allUsers,
				filtered,
				channels,
				setChatList,
				chatList,
				selectedConversation,
				setSelectedConversation,
			}}
		>
			<Grid
				templateAreas={`"nav main"`}
				gridTemplateColumns={"25vw 75vw"}
				gridTemplateRows={"100vh"}
				h="100vh"
			>
				<SideBar />
				<ChatBox />
			</Grid>
		</ConvoContext.Provider>
	);
};

export default Client;
