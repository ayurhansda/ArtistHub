
import React, { useEffect, useState } from 'react';
import "../../styles/ContactUs.css";
import contactus from "../assets/contactus.png";


const URL = "http://localhost:5000/api/form/contact";
function Contact() {
  useEffect(() => {
	  document.title = 'Contact - Artist Hub';
  },  []);

	const [ contact, setContact ] = useState({
		username: "",
		email: "",
		message: ""
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setContact({
			...contact,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(contact);
		try {
                        const response = await fetch(URL, {
                                method:"POST",
                                headers: {
                                        "Content-Type":"application/json",
                                },
                                body:JSON.stringify(contact),
                        });

                        if (response.ok) {
                                setContact({username: "", email: "", message: ""})
                        }

                        console.log(response);
                } catch (error) {
                        console.log("register ", error);
                }

	};



  return (
	  <section className="section-contact">
	    <div className="contact-content container">
	      <div className="main-heading">Contact Us</div>
	      <div className="underline"></div>
	    </div>
	    
	    <div className="container-grid grid-two-cols">
	      <div className="contact-img">
	        <img src= {contactus}  width="500" height="500" alt="ContactUs" />
	      </div>
	      
	      <section className="section-form">
	        <form onSubmit= {handleSubmit}>
	          <div>
	            <label htmlFor="username">username</label>
	            <input type="text" name="username" id="username" autoComplete="off" required value={contact.username} onChange={handleInput}/>
	          </div>

	          <div>
	            <label htmlFor="email">email</label>
	            <input type="email" name="email" id="email" autoComplete="off" required value={contact.email} onChange={handleInput}/>
	          </div>

	          <div>
	            <label htmlFor="message">message</label>
	            <textarea name="message" id="message" cols="40" rows="20" autocomple="off" required value={contact.message} onChange={handleInput}></textarea>
	          </div>
                  
	          <div>
	            <button type="submit">Submit</button>
	          </div>

	        </form>
	      </section>
	    </div>
	  </section>
  );
}

export default Contact;

