import React, { useState } from "react";
import {
	Button,
	FormControl,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import ProgressModal from "./ProgressModal";

import InputBox from "components/input/InputBox";
const LoginModal = ({ onSubmit, loading }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);
	return (
		<>
			<Button onClick={onOpen}>Log In</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick={loading ? false : true}
			>
				<ModalOverlay />
				<ModalContent>
					{loading ? (
						<ProgressModal />
					) : (
						<>
							<ModalHeader>Log In</ModalHeader>
							<ModalCloseButton />
							<FormControl
								onSubmit={handleSubmit}
								paddingX={"1.5rem"}
								pb="1rem"
							>
								<VStack
									divider={<StackDivider borderColor={"gray.200"} />}
									spacing={4}
									align="stretch"
								>
									<InputBox
										type="email"
										id="email"
										placeholder="Your email address"
										title="Email address"
										handleChange={handleEmailChange}
									/>
									<InputBox
										type="password"
										id="password"
										placeholder="Your password"
										title="Password"
										handleChange={handlePasswordChange}
										setShowPass={setShowPass}
										showPass={showPass}
									/>
									<Button
										colorScheme={"yellow"}
										type="submit"
										onClick={handleSubmit}
									>
										Login
									</Button>
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
