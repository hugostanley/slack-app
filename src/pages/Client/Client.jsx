import React, { useState, createContext, useContext, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "pages/Client/components/Sidebar";
import ChatBox from "components/Client/ChatBox";
import { UserContext } from "utils/Context";
import axios from "axios";

//const ConvoContext = createContext(null);

const Client = () => {
	const { headers, userData } = useContext(UserContext);
	const [allUsers, setAllUsers] = useState([]);
	const [test, settest] = useState([]);
	/*
	const getConvo = (allUsers) => {
		if (allUsers.length > 0) {
			for (let i = allUsers.length - 500; i < allUsers.length; i++) {
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
								setAllUsers((state)=>{
									return state.filter((item)=> item !== current)
								})
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
		}
	};
	*/
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
	}, [headers]);

	useEffect(() => {
		console.log(allUsers)
	}, [allUsers]);

	return (
		<>
			<Grid
				templateAreas={`"nav main"`}
				gridTemplateColumns={"25vw 75vw"}
				gridTemplateRows={"100vh"}
				h="100vh"
			>
				<SideBar />
				<ChatBox />
			</Grid>
		</>
	);
};

export default Client;
