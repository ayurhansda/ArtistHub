import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../../styles/Register.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import phone_icon from '../assets/phone.png';


const URL = "http://localhost:5000/api/auth/register";
const Register= () => {

	useEffect(() => {
		document.title = 'Register - Artist Hub';
	}, []);
	
	const [action,setAction] = useState("Register");
	const [user, setUser] = useState({
		username: "",
		email: "",
		phone: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setUser({
			...user,  //using Spread Operator
                        [name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user);
		try {
			const response = await fetch(URL, {
				method:"POST",
				headers: {
					"Content-Type":"application/json",
				},
				body:JSON.stringify(user),
			});
			
			if (response.ok) {
				setUser({username: "", email: "", phone: "", password: ""})
				navigate("/login");
			}

			console.log(response);
		} catch (error) {
			console.log("register ", error);
		}
	};


	return (
		<section>
		<main>
		<div className='containers'>
		  <form onSubmit= {handleSubmit}>
		  <div className="header">
		    <div className="text">{action}</div>
		    <div className="underline"></div>
		  </div>
		  <div className="inputs">
		    <div className="input">
		      <img src={user_icon} alt="" />
		      <input type="text" name="username" placeholder="Username" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
		    </div>
		    
		    <div className="input">
		      <img src={email_icon} alt="" />
		      <input type="email"name="email" placeholder="Email Id" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
		    </div>
	
	            <div className="input">
		      <img src={phone_icon} alt="" />
		      <input type="number" name="phone" placeholder="Phone Number" id="phone" require autocomplete="off" value={user.phone} onChange={handleInput} />
		    </div>
		    
		    <div className="input">
		      <img src={password_icon} alt="" />
		      <input type="password" name="password" placeholder="Password" id="password" require autocomplete="off" value={user.password} onChange={handleInput} />
		    </div>
		  </div>
                  <button type="submit" className="submit-btn">Sign Up</button>
	         </form>
		</div>
		</main>
		</section>
	)
}

export default Register; 
