import axios from "axios";
import React, { useEffect, useState } from "react";

const RegisterModal = () => { 
	const [newUser, setNewUser] = useState({})
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	
	const handleSubmit =(e)=> {
		e.preventDefault()
		if (  password === passwordConfirm) {
			setNewUser(prev => {
				return {...prev, "email": email, "password": password, "password_confirmation": passwordConfirm}
			})
		}
		setEmail('')
		setPassword('')
		setPasswordConfirm('')
	}

	useEffect(()=>{
		axios.post('http://206.189.91.54/api/v1/auth/', {
			"email": String(email),
			"password":String(password), 
			"password_confirmation": String(passwordConfirm)
		})
			.then(resp=> console.log(resp))
			.catch(err=> console.log(err))
	}, [newUser])
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input value={email} onChange={e=> setEmail(e.target.value)} id='email' type='text'/>
				<label htmlFor="password">Password</label>
				<input value={password} onChange={e=> setPassword(e.target.value)} id='password' type='text'/>
				<label htmlFor="retype">Confirm Password</label>
				<input value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)} id='retype' type='text'/>
				<button type="submit">submit</button>
			</form>
		</div>

	)
}


export default RegisterModal

