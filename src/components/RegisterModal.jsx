import React, { useState } from "react";

const RegisterModal = () => { 
	const [newUser, setNewUser] = useState({})
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	
	const handleSubmit =()=> {
		e.preventDefault()
		if (email, password && password === passwordConfirm) {
			setNewUser(prev => {
				return {...prev, "email": email, "password": password, "password_confirmation": passwordConfirm}
			}
		}
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input value={email} onChange={e=> setEmail(e.target.value)} id='email' type='text'/>
				<label htmlFor="password">Password</label>
				<input value={password} onChange={e=> setPassword(e.target.value)} id='password' type='text'/>
				<label htmlFor="retype">Confirm Password</label>
				<input value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)} id='retype' type='text'/>
			</form>
		</div>

	)
}


export default RegisterModal

