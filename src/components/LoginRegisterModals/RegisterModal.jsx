import React, {useState} from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const RegisterModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);

	return (
		<>
			<Button onClick={onOpen} colorScheme='yellow'>Register</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Register</ModalHeader>
					<ModalCloseButton />
					<FormControl paddingX={"1.5rem"} pb="1rem">
						<VStack
							divider={<StackDivider borderColor={"gray.200"} />}
							spacing={4}
							align="stretch"
						>
							<Box>
								<FormLabel htmlFor="email">Email address</FormLabel>
								<Input id="email" type={'email'} placeholder='Your email' />
							</Box>
							<Box>
								<FormLabel htmlFor="password">Password</FormLabel>
								<InputGroup>
									<Input id="password" type={showPass ? "text" : "password"} placeholder='Your password' />
									<InputRightElement>
										{showPass ? (
											<ViewOffIcon onClick={handleClick} />
										) : (
											<ViewIcon onClick={handleClick} />
										)}
									</InputRightElement>
								</InputGroup>
							</Box>
							<Box>
								<FormLabel htmlFor="password-confirm">Confirm password</FormLabel>
								<InputGroup>
									<Input id="password-confirm" type={showPass ? "text" : "password"} placeholder='Confirm password' />
									<InputRightElement>
										{showPass ? (
											<ViewOffIcon onClick={handleClick} />
										) : (
											<ViewIcon onClick={handleClick} />
										)}
									</InputRightElement>
								</InputGroup>
							</Box>
							<Button colorScheme={"yellow"}>Register</Button>
						</VStack>
					</FormControl>
				</ModalContent>
			</Modal>
		</>
	);
};

export default RegisterModal;
