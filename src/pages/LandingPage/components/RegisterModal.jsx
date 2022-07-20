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
	useToast,
} from "@chakra-ui/react";
import InputBox from "components/input/InputBox";
import ProgressModal from "./ProgressModal";
import useFetch from "utils/useFetch";
const RegisterModal = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPassWordConfirm] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const [showPassConfirm, setShowPassConfirm] = useState(false);
	const { loading, postRegister, error, success } = useFetch();
	const toast = useToast();

	const handleSubmit = () => {
		postRegister("auth", {
			name,
			email,
			password,
			password_confirmation: passwordConfirm,
		});
		setPassword("");
		setPassWordConfirm("");
		setName("");
		setEmail("");
	};

	return (
		<>
			<Button onClick={onOpen} colorScheme="yellow">
				Register
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					{loading ? (
						<ProgressModal />
					) : (
						<>
							<ModalHeader>Register</ModalHeader>
							<ModalCloseButton />
							<FormControl isInvalid={error} paddingX={"1.5rem"} pb="1rem">
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
										value={email}
										onStateChange={(e) => setEmail(e.target.value)}
										error={error && error.email}
									/>
									<InputBox
										id="name"
										type="text"
										title="Full name"
										placeholder="Your full name"
										value={name}
										onStateChange={(e) => setName(e.target.value)}
									/>
									<InputBox
										id="password"
										type="password"
										title="Password"
										placeholder="Enter password"
										showPass={showPass}
										setShowPass={setShowPass}
										value={password}
										onStateChange={(e) => setPassword(e.target.value)}
										error={error && error.password}
									/>
									<InputBox
										id="password_confirm"
										type="password"
										title="Confirm password"
										placeholder="Re-enter password"
										showPass={showPassConfirm}
										setShowPass={setShowPassConfirm}
										value={passwordConfirm}
										onStateChange={(e) => setPassWordConfirm(e.target.value)}
										error={error && error.password_confirmation}
									/>
									<Button colorScheme={"yellow"} onClick={handleSubmit}>
										Register
									</Button>
								</VStack>
							</FormControl>
						</>
					)}
				</ModalContent>
				{success &&
					toast({
						title: "Account Created",
						description: "You may now login using your account",
						status: "success",
						duration: 9000,
						isClosable: true,
					})}
			</Modal>
		</>
	);
};

export default RegisterModal;
