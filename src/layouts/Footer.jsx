import React from "react";
import {Link, Flex, Stack, Text, Spacer} from '@chakra-ui/react'

const Footer =()=> {
	return (
		<Flex borderTop='lightgray 1px solid' gap='2' fontSize="x-small" h='100%' w='100%' paddingX='4rem' alignItems='center'>
			<Text fontWeight='bold' >©2022 Slack Technologies</Text>
			<Text> The Slack logo is a trademark of its respective owner.</Text>
			<Spacer flex='2' />
			<Stack direction='row'>
				<Link href="https://slack.com/trust/privacy/privacy-policy" isExternal>Data Policy</Link>
				<Link href='https://slack.com/legal' isExternal>Terms </Link>
				<Link  >Cookie Preferences</Link>
			</Stack>
		</Flex>

		) 
}

export default Footer
