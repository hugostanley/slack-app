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
import useFetch from "utils/useFetch";
import { useContext } from "react";
import { UserContext } from "utils/Context";
import { useNavigate } from "react-router-dom";
import Logout from "utils/logOut";

const Main = () => {
	const navigate = useNavigate();
	const { auth, setAuth, setHeaders, setUserData } = useContext(UserContext);
	const { data, error, loading, postFetch } = useFetch();
	const handleLogin = (email, password) => {
		postFetch("auth/sign_in", { email, password });
	};
	const handlRegister = (body) => {};
	const handleSwitch = () => {
		setAuth(false)
		setHeaders({})
		setUserData({})
	};
	const handleNavigate = () => navigate("/client");

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
									<LoginModal onSubmit={handleLogin} loading={loading} />
									<RegisterModal onSubmit={handlRegister} loading={loading} />
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
