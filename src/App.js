import React from "react";
import {Routes,  Route} from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import Chat from './pages/Chat'

const App=()=> {
  return (
		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/chat" element={<Chat/>}/>
		</Routes>
  );
}

export default App;
