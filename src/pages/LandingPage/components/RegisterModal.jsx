import React, { useState } from "react";
import {
	Button,
	FormControl,
	ModalCloseButton,
	Modal,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import InputBox from "components/input/InputBox";
const RegisterModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const [showPassConfirm, setShowPassConfirm] = useState(false);

	return (
		<>
			<Button onClick={onOpen} colorScheme="yellow">
				Register
			</Button>
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
							<InputBox
								id="email"
								type="email"
								title="Email Address"
								placeholder="Your email"
							/>
							<InputBox
								id="name"
								type="text"
								title="Full name"
								placeholder="Your full name"
							/>
							<InputBox
								id="password"
								type="password"
								title="Password"
								placeholder="Enter password"
								showPass={showPass}
								setShowPass={setShowPass}
							/>
							<InputBox
								id="password_confirm" type="password"
								title="Confirm password"
								placeholder="Re-enter password"
								showPass={showPassConfirm}
								setShowPass={setShowPassConfirm}
							/>
							<Button colorScheme={"yellow"}>Register</Button>
						</VStack>
					</FormControl>
				</ModalContent>
			</Modal>
		</>
	);
};

export default RegisterModal;
