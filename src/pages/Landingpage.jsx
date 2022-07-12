import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from '../layouts/Header'
import Main from '../layouts/Main'
import Footer from '../layouts/Footer'

const LandingPage = ()=>{
	return ( 
		<Grid templateAreas={`"header" "main" "footer"`}
					gridTemplateRows={'10% 80% 10%'}
					minHeight='100vh'
					maxHeight='100vh'
		>
			<GridItem  w='100vw' area={'header'}><Header /></GridItem>
			<GridItem w='100vw' area={'main'}><Main/></GridItem>
			<GridItem w='100vw' area={'footer'}><Footer/></GridItem>
		</Grid>
	)
}


export default LandingPage
