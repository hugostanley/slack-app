import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from '../components/NavBar'
const LandingPage = ()=>{
	return ( 
		<Grid templateAreas={`"header" "main" "footer"`}
					gridTemplateRows={'10% 80% 10%'}
					minHeight='100vh'
					maxHeight='100vh'
		>
			<GridItem bg='blue' w='100vw' area={'header'}><NavBar /></GridItem>
			<GridItem bg='cyan' w='100vw' area={'main'}>Main</GridItem>
			<GridItem bg='blue' w='100vw' area={'footer'}>Footer</GridItem>
		</Grid>
	)
}


export default LandingPage
