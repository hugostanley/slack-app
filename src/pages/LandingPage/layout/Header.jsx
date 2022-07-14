import { MoonIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Link, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import SlackLogo from 'assets/images/Slack_Monochrome_Black.png'

const Header = ()=> {
	return (
		<Flex alignItems='center'  height='100%' width='100%' paddingX='4rem'>
			<Center flex='1'>
				<Link href='https://slack.com/' isExternal>
					<Image src={SlackLogo} boxSize='50%'/>
				</Link>
			</Center>
			<Spacer flex='2'/>
			<Center flex='1' justifyContent='space-evenly'>
				<Link href="https://slack.com/solutions" isExternal>
					<Text fontSize='sm'>Solutions</Text>
				</Link>
				<Link href="https://slack.com/enterprise" isExternal>
					<Text fontSize='sm'>Enterprise</Text>
				</Link>
				<Link href="https://slack.com/pricing" isExternal>
					<Text fontSize='sm'>Pricing</Text>
				</Link>
				<MoonIcon />
			</Center>
		</Flex>
	)
}

export default Header


