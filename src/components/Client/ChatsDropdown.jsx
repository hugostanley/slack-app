import React, { useContext, useEffect, useState } from "react";
import {
	Accordion,
	AccordionPanel,
	AccordionIcon,
	AccordionButton,
	AccordionItem,
	Text,
	Box,
	Flex,
} from "@chakra-ui/react";
import ChatsItem from "../Client/ChatsPanelItem";
import { UserContext } from "utils/Context";
import axios from "axios";

const ChatsDropdown = ({ title }) => {
	const [allUsers, setAllUsers] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const { headers } = useContext(UserContext);

	const getit = () => {
		let newArr = [];
		for (let i = 1500; i < allUsers.length; i++) {
			let current = allUsers[i];
			axios
				.get(
					`http://206.189.91.54/api/v1/messages?receiver_id=${current.id}&receiver_class=User`,
					{ headers: headers }
				)
				.then((resp) => {
					if (resp.data.data.length !== 0) {
						if (
							resp.data.data[0].receiver.email === "try@gmail.com" ||
							resp.data.data[0].sender.email === "try@gmail.com"
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
		console.log("hello");
		axios
			.get("http://206.189.91.54/api/v1/users", { headers: headers })
			.then((resp) => {
				setAllUsers(resp.data.data);
				console.log(resp.data.data);
			})
			.catch((err) => console.log(err));

		/*
		axios
			.get(
				`http://206.189.91.54/api/v1/messages?receiver_id=${2398}&receiver_class=User`,
				{ headers: headers }
			)
			.then((resp) => {
				console.log(resp.data.data);
			})
			.catch((err) => console.log(err));
			*/
	}, []);

	/*
						`http://206.189.91.54/api/v1/messages?receiver_id=${item.id}&receiver_class=User`,
						{ headers: headers }
		* */

	useEffect(() => {
		console.log(filtered);
	}, [filtered]);

	return (
		<Accordion defaultIndex={[0]} allowMultiple >
			<AccordionItem borderTop={"none"}>
				<AccordionButton _hover={{ background: "none" }} paddingX="1" mt={1}>
					<Box flex="1" textAlign="left">
						<Text fontWeight={"bold"} fontSize={"sm"}>
							{title}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pl={1}>
					<Flex gap={1} flexDir={"column"}>
						{filtered &&
							filtered.map((item) => {
								return (
									<ChatsItem
										source={"https://bit.ly/dan-abramov"}
										name={'try'}
									/>
								);
							})}
						{/*
						<ChatsItem
							source={"https://bit.ly/dan-abramov"}
							name={"Stanley Hugo"}
						/>
						<ChatsItem
							source={"https://bit.ly/tioluwani-kolawole"}
							name={"Jonathan Smith"}
						/>
						<ChatsItem
							source={"https://bit.ly/kent-c-dodds"}
							name={"Jonathan Smith"}
						/>
						*/}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChatsDropdown;
