import { Box, Button, Center, Container, Flex, Heading, Image, Spacer, Stack, Text, } from "@chakra-ui/react";
import React from "react";
import Hero from '../assets/images/hero.png'
import LoginModal from '../components/LoginModal'

const Main = ()=> {
	return (
		<Center height='100%' width='100%'>
			<Flex>
				<Flex flexDir='column' gap='5' alignItems='flex-start' justifyContent='center'>
					<Box>
						<Heading as='h1' size='4xl'>
							Anytime,
						</Heading>
						<Heading as='h1' size='4xl'>
							Anywhere
						</Heading>
					</Box>
					<Text color='gray.600'  >Don't miss out, join slack today </Text>
					<Stack direction='row'>
						<LoginModal />
						<Button colorScheme='yellow'gray>Register</Button>
					</Stack>
				</Flex>
				<Spacer w='10vw'/>
				<Container >
					<Image src={Hero}  />
				</Container>
			</Flex>
		</Center>
	) 
}


export default Main
