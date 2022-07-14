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
	useToast,
	VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ProgressModal from "./ProgressModal";
import useFetch from "../../utils/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const toast = useToast();
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.post("http://206.189.91.54/api/v1/auth/sign_in", {
				email,
				password,
			})
			.then((resp) => {
				console.log(resp);
				navigate("/client");
			})
			.catch((err) => {
				console.log(err.response.data.errors);
				setError(err.response.data.errors);
			})

			.finally(() => setLoading(false));
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
								onSubmit={handleSubmit}
								paddingX={"1.5rem"}
								pb="1rem"
							>
								<VStack
									divider={<StackDivider borderColor={"gray.200"} />}
									spacing={4}
									align="stretch"
								>
									<Box>
										<FormLabel htmlFor="email">Email address</FormLabel>
										<Input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											id="email"
											type={"email"}
											placeholder="Your email"
										/>
									</Box>
									<Box>
										<FormLabel htmlFor="password">Password</FormLabel>
										<InputGroup>
											<Input
												value={password}
												onChange={(e) => setPassword(e.target.value)}
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
			{error &&
				toast({
					title: `${error}`,
					status: 'error',
					isClosable: true,
				})}
		</>
	);
};

export default LoginModal;
