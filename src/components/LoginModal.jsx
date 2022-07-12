import React from "react";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Button, useDisclosure} from '@chakra-ui/react'

const LoginModal = () => { 
	const {isOpen, onOpen, onClose} = useDisclosure()
	return (
		<>
		<Button colorScheme='gray' onClick={onOpen}>Log In</Button>

		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay/>
			<ModalContent>
				<ModalHeader> Login </ModalHeader>
				<ModalCloseButton/>
				<ModalBody>
					<FormControl>
						<FormLabel htmlFor="email">Email address</FormLabel>
						<Input id="email" type='email'/>
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input id="password" type='password'/>
						<Button colorScheme='yellow' marginY='1rem'>Log In</Button>
					</FormControl>
				</ModalBody>
			</ModalContent>
		</Modal>
		</>
	)
}


export default LoginModal

