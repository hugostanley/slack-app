import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const LandingPage = () => {
	return (
		<Grid
			templateAreas={`"header" "main" "footer"`}
			gridTemplateRows={"10% 80% 10%"}
			minHeight="100vh"
			maxHeight="100vh"
		>
			<GridItem w="100vw" area={"header"}>
				<Header />
			</GridItem>
			<GridItem w="100vw" area={"main"}>
				<Main />
			</GridItem>
			<GridItem w="100vw" area={"footer"}>
				<Footer />
			</GridItem>
		</Grid>
	);
};

export default LandingPage;
