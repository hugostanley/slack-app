import { Box, Center, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import SlackLogo from '../assets/images/Slack_RGB.png'

const NavBar = ()=> {
	return (
		<Flex alignItems='center'  height='100%' width='100%' >
			<Center flex='1'>
				<Image src={SlackLogo} boxSize='50%'/>
			</Center>
			<Spacer flex='2'/>
			<Center flex='1' justifyContent='space-evenly'>
				<Text>Text</Text>
				<Text>Text</Text>
				<Text>Text</Text>
			</Center>
		</Flex>
	)
}

export default NavBar
