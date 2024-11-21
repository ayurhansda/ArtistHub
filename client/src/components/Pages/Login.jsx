import React, { useState } from "react";
import { useEffect } from "react";
import '../../styles/Login.css';

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


const URL = "http://localhost:5000/api/auth/login";
const Login = () => {

	useEffect(() => {
		document.title = 'Login or Signup - Artist Hub';
	}, []);
	
	const [action,setAction] = useState("Login");
	const [user, setUser] = useState({
		email:"",
		password:"",
	});

	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setUser({
			...user,
			[name]:value,
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
				alert("Login Successfull");
                                setUser({email: "",password: ""})
                        } else{
				alert("Invalid Credentials");
				console.log("invalid credentials");
			}

                        console.log(response);
                } catch (error) {
                        console.log("login  form ", error);
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
                      <img src={email_icon} alt="" />
                      <input type="email"name="email" placeholder="Email Id" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                    </div>

                    <div className="input">
                      <img src={password_icon} alt="" />
                      <input type="password" name="password" placeholder="Password" id="password" require autocomplete="off" value={user.password} onChange={handleInput} />
                    </div>
                  </div>
                  <button type="submit" className='submit-btn'>Login</button>
                </form>               
		</div>
		</main>
		</section>
	);
}

export default Login;
