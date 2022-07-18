import React, { useState, useContext } from "react";
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
import useFetch from "utils/useFetch";

const LoginModal = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const { data, error, loading, postFetch } = useFetch();
	const handleSubmit = (e, email, password) => {
		e.preventDefault();
		console.log(email, password);
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
							<FormControl
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
										value={email}
									/>
									<InputBox
										type="password"
										id="password"
										placeholder="Your password"
										title="Password"
										handleChange={handlePasswordChange}
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
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
