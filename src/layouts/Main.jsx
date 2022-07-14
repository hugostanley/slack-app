import Hero from "../assets/images/hero.png";
import {
	Center,
	Flex,
	Box,
	Heading,
	Text,
	Spacer,
	Container,
	Stack,
	Image,
} from "@chakra-ui/react";
import LoginModal from "../components/LoginRegisterModals/LoginModal";
import RegisterModal from "../components/LoginRegisterModals/RegisterModal";
import useFetch from '../utils/useFetch'
const Main = () => {
	const {data, error, loading, postFetch} = useFetch()
	const handleLogin = (email,password)=> {
		postFetch("auth/sign_in", { email, password });
	}
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
							<LoginModal onSubmit={handleLogin} loading={loading}/>
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
