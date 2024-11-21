import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/Error.css";
import ErrorPage from "../assets/404_page.jpg";

function Error() {
	useEffect(() => {
		document.title = '404PageNotFound - Artist Hub';
	}, []);


	return (
    	<>
		<section id="error-page">
		  <div className="content">
		    <h2 className="header"></h2>
		    <img src={ErrorPage} alt="Page Not Found"/>
		    <p> Oops! The page you're trying to access does not exit. If you believe there's an issue, feel free to report it, we'll look into it.</p>

		  <div className="submit-container">
		    <NavLink to="/">
		    <div className="submit">Return Home</div>
		    </NavLink>
		    <NavLink to="/contact">
		    <div className="submit">Report Problem</div>
		    </NavLink>
		  </div>
		  </div>
    		</section>
	</>
  	);
}

export default Error;
