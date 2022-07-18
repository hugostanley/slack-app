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
import ProgressModal from "./ProgressModal";
import useFetch from "utils/useFetch";
const RegisterModal = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPassWordConfirm] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showPass, setShowPass] = useState(false);
	const [showPassConfirm, setShowPassConfirm] = useState(false);
	const { loading, postRegister } = useFetch();

	const handleSubmit = () => {
		console.log(fullName, email, passwordConfirm, password)
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
										value={email}
										onStateChange={(e) => setEmail(e.target.value)}
									/>
									<InputBox
										id="name"
										type="text"
										title="Full name"
										placeholder="Your full name"
										value={fullName}
										onStateChange={(e) => setFullName(e.target.value)}
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
									/>
									<Button colorScheme={"yellow"} onClick={handleSubmit}>
										Register
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

export default RegisterModal;
