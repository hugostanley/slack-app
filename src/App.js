import React, {useEffect, useState} from "react";
import Test from './components/Test'
import axios from "axios";

function App() {
	const [name, setName] = useState('')
	const [pass, setPass] = useState('')
	const [confirm, setConfirm] = useState('')
	const [good, setGood] = useState(false)
	const [data, setData] = useState(null)
	const handleSubmit = (e)=> {
		e.preventDefault()
		if(pass === confirm){
			setGood(true)
			setData({
				"email": name,
				"password": pass,
				"password_confirmation": confirm
			})
		}
	}
	const postIt = (data)=> {
		axios.post('http://206.189.91.54/api/v1/auth/', data).then(res=> console.log(res)).catch(err=> console.log(err))
	}
	useEffect(()=>{
		if(data){
			postIt(data)
		}
	}, [data])
  return (
    <div className="App">
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={e=> setName(e.target.value)} placeholder='name'/>
				<input value={pass} onChange={e=> setPass(e.target.value)} placeholder='pass'/>
				<input value={confirm} onChange={e=> setConfirm(e.target.value)} placeholder='confirme'/>
				<button type="submit">submit</button>
			</form>
    </div>
  );
}

export default App;
