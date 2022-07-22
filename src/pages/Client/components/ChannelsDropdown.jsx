import React, { useContext, useState } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	Box,
	Text,
	AccordionIcon,
	AccordionPanel,
	Flex,
} from "@chakra-ui/react";
import ChatsPanel from "components/Client/ChatsPanelItem";
import { ConvoContext, UserContext } from "utils/Context";
import axios from "axios";
const ChannelsDropdown = () => {
	const { channels, setSelectedConversation } = useContext(ConvoContext);
	const { headers } = useContext(UserContext);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false)
	const handleSelect = (item) => {
		setSelectedConversation((state) => {
			return {
				...state,
				email: item.name,
				id: item.id,
				receiver_class: item.type,
				body: "",
			};
		});
	};
	const handleAdd = (channel_id, member_id) => {
		setLoading(true)
		axios
			.post(
				"http://206.189.91.54/api/v1/channel/add_member",
				{
					id: channel_id,
					member_id: member_id,
				},
				{ headers }
			)
			.then((resp) => {
				if (resp.data.errors) {
					setError(resp.data.errors);
				} else {
					setSuccess(true);
				}
			})
			.catch((err) => {
				console.log(err.data);
			})
			.finally(() => {
				
				setLoading(false)
				setInterval(() => {
					setSuccess(false);
					setError(null)
				}, 5000);
			});
	};
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem borderTop={"none"}>
				<AccordionButton _hover={{ background: "none" }} paddingX="1" mt={1}>
					<Box flex="1" textAlign="left">
						<Text fontWeight={"bold"} fontSize={"sm"}>
							{"Channels"}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pl={1} maxH="35vh" overflowY={"auto"}>
					<Flex gap={1} flexDir={"column"}>
						{channels.map((item, index) => {
							return (
								<ChatsPanel
									key={index}
									type={"Channel"}
									name={item.name.replace(/['"]+/g, "")}
									id={item.id}
									handleSelect={handleSelect}
									handleAdd={handleAdd}
									error={error}
									success={success}
									loading={loading}
								/>
							);
						})}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ChannelsDropdown;
