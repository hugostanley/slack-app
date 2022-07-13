import React, { useState } from "react";
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
import ProgressModal from "./ProgressModal";

const LoginModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);
	const [loading, setLoading] = useState(false);
	return (
		<>
			<Button onClick={onOpen}>Log In</Button>
			<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={loading ? false: true}>
				<ModalOverlay />
				<ModalContent>
					{loading ? (
						<ProgressModal />
					) : (
						<>
							<ModalHeader>Log In</ModalHeader>
							<ModalCloseButton />
							<FormControl paddingX={"1.5rem"} pb="1rem">
								<VStack
									divider={<StackDivider borderColor={"gray.200"} />}
									spacing={4}
									align="stretch"
								>
									<Box>
										<FormLabel htmlFor="email">Email address</FormLabel>
										<Input id="email" type={"email"} placeholder="Your email" />
									</Box>
									<Box>
										<FormLabel htmlFor="password">Password</FormLabel>
										<InputGroup>
											<Input
												id="password"
												type={showPass ? "text" : "password"}
												placeholder="Your password"
											/>
											<InputRightElement>
												{showPass ? (
													<ViewOffIcon onClick={handleClick} />
												) : (
													<ViewIcon onClick={handleClick} />
												)}
											</InputRightElement>
										</InputGroup>
									</Box>
									<Button colorScheme={"yellow"}>Login</Button>
								</VStack>
							</FormControl>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
