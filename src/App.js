import React from "react";
import {Routes,  Route} from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import Client from './pages/Client'

const App=()=> {
  return (
		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/client" element={<Client/>}/>
		</Routes>
  );
}

export default App;
