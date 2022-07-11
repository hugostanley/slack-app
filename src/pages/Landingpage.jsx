import React, { useState } from "react";
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'

const LandingPage = ()=>{
	const [loginOpen, setLoginOpen] = useState(false)
	const [registerOpen, setRegisterOpen] = useState(false)
	return ( 
		<>
			<div> 
				<button onClick={()=> setLoginOpen(!loginOpen)}>Login</button>
				<button onClick={()=> setRegisterOpen(!registerOpen)}>Register</button>
			</div>
			{loginOpen && <LoginModal />}
			{registerOpen && <RegisterModal />}
		</>
	)
}


export default LandingPage
