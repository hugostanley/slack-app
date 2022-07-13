import React from "react";
import { Box, Center, CircularProgress } from "@chakra-ui/react";
const ProgressModal = () => {
	return (
		<Center h={'20rem'} w='100%'>
			<CircularProgress isIndeterminate color="blue.300" />
		</Center>
	);
};


export default ProgressModal
