import React, { useState } from "react";
import {
	Button,
	Alert,
	AlertIcon,
	AlertDescription,
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
import useFetch from "utils/useFetch";

const LoginModal = () => {
	// email and password states for the input and for the login api fetch call
	// showpass state is for the hide and show password Button
	// useDisclosure is a custom hook of Chakra for their modals
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// onChange functions
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const { error, loading, postFetch } = useFetch();
	const handleSubmit = (e, email, password) => {
		e.preventDefault();
		postFetch("auth/sign_in", { email, password });
	};

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
							<FormControl paddingX={"1.5rem"} pb="1rem">
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
										onStateChange={handleEmailChange}
										value={email}
									/>
									<InputBox
										type="password"
										id="password"
										placeholder="Your password"
										title="Password"
										onStateChange={handlePasswordChange}
										value={password}
										setShowPass={setShowPass}
										showPass={showPass}
									/>
									<Button
										colorScheme={"yellow"}
										type="submit"
										onClick={(e) => handleSubmit(e, email, password)}
									>
										Login
									</Button>
								</VStack>
							</FormControl>
						</>
					)}
					{error && (
						<Alert status="error">
							<AlertIcon />
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
