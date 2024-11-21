//import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css";
import instagram from "./assets/instagram.jpg";
import linkedin from "./assets/linkedin.jpg";
import twitter from "./assets/twitter.jpg";
import gmail from "./assets/gmail.png";

const Footer = () => {
	return (
		<>
		  <footer id="footer2">
		    <a href="https://www.instagram.com/artistshub116/?hl=en"><img src={instagram} class="decrease-size" alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/artists-hub-a62626305/"><img src={linkedin} class="decrease-size" alt="linkedin" /></a>
                    <a href="https://twitter.com/artistshub116"><img src={twitter} class="decrease-size" alt="twitter" /></a>
                    <img src={gmail} class="decrease-size" alt="G-mail" />
                    <p>&copy; 2024 ArtistsHub</p>
                  </footer>
		</>
	);
};

export default Footer;

