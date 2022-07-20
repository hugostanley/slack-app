import {
	Center,
	Button,
	Flex,
	Box,
	Heading,
	Text,
	Spacer,
	Container,
	Stack,
	Image,
} from "@chakra-ui/react";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import Hero from "assets/images/hero.png";
import { useContext } from "react";
import { UserContext } from "utils/Context";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();
	const { auth, setAuth, setHeaders, setUserData } = useContext(UserContext);
	const handleNavigate = () => navigate("/client");
	const handleSwitch = () => {
		setAuth(false);
		setHeaders({});
		setUserData({});
	};

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
							{auth ? (
								<>
									<Button onClick={handleSwitch} colorScheme={"gray"}>
										{" "}
										Switch Account{" "}
									</Button>
									<Button onClick={handleNavigate} colorScheme={"yellow"}>
										{" "}
										Continue as user{" "}
									</Button>
								</>
							) : (
								<>
									<LoginModal />
									<RegisterModal />
								</>
							)}
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
