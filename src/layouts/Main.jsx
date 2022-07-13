import Hero from "../assets/images/hero.png";
import {
	useDisclosure,
	Center,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Spacer,
	Container,
	Stack,
	Image,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const Main = () => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<Center height="100%" width="100%">
				<Flex>
					<Flex
						flexDir="column"
						gap="5"
						alignItems="flex-start"
						justifyContent="center"
					>
						<Box>
							<Heading as="h1" size="4xl">
								Anytime,
							</Heading>
							<Heading as="h1" size="4xl">
								Anywhere
							</Heading>
						</Box>
						<Text color="gray.600">Don't miss out, join slack today </Text>
						<Stack direction="row">
							<LoginModal />

							<RegisterModal />
						</Stack>
					</Flex>
					<Spacer w="10vw" />
					<Container>
						<Image src={Hero} />
					</Container>
				</Flex>
			</Center>
		</>
	);
};

export default Main;
