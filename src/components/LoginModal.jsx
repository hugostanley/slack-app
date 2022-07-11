import React from "react";

const LoginModal = () => { 
	return (
		<div>
			<form>
				<label htmlFor="email">Email</label>
				<input id='email' type='text'/>
				<label htmlFor="password">Password</label>
				<input id='password' type='text'/>
			</form>
		</div>

	)
}


export default LoginModal

