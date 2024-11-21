// src/pages/About.js
import React, { useEffect } from 'react';
import "../../styles/AboutUs.css";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import privacy_policy from "../assets/privacy_policy.png";
import codder from "../assets/codder.jpg";
import planner from "../assets/planner.png";
import designer from "../assets/designer.png";

function AboutUs() {
	useEffect(() => {
		document.title = 'About Us - Artist Hub';
	}, []);


	return (
    	<div>
      		<body>
    <header id="aboutus">
        <h1>About Us</h1>
        <h4>Connections, Collaboration, Hiring</h4>
        <p>Fostering Creativity and Connection in a Digital Realm</p>
        <div class="button">
            <a href="#footer1" class="btn">Learn More</a>
        </div>
    </header>

    <section class="category-section">
        <div class="category">
            <img src={mission} alt="Mission" />
            <h2>Mission</h2>
            <p>Our mission is to empower artists by providing a centralized platform that 
                fosters connection, collaboration, and recognition within the artistic community.
                 We aim to break down geographical barriers and overcome limitations in networking 
                 opportunities by offering a comprehensive solution for showcasing talent, finding
                  collaborators, and accessing employment opportunities. Through our platform, 
                  we seek to unite the fragmented artistic community, creating a vibrant ecosystem 
                  where creativity thrives and talent does not go unnoticed. We are committed to 
                  empowering artists of all backgrounds to realize their full potential and contribute
                   meaningfully to the world of art.</p>
        </div>
        <div class="category">
            <img src={vision} alt="Vision" />
            <h2>Vision</h2>
            <p>Our vision is to create a dynamic online ecosystem where artists worldwide can thrive 
                and connect effortlessly. Through personalized user profiles and a diverse range of 
                showcase options, we envision a platform that celebrates creativity in all its forms, 
                from visual art to music and beyond. By fostering meaningful connections through 
                networking features and robust collaboration tools, we aim to catalyze innovative
                 partnerships and elevate the collective artistic experience. Our dedicated job board 
                 will serve as a gateway to endless opportunities, empowering artists to turn their 
                 passion into profession. With intuitive search and filtering capabilities and a proactive 
                 notification system, our platform will be the go-to destination for discovering talent, 
                 forging connections, and unlocking new artistic horizons. Behind the scenes, 
                 our streamlined admin panel will ensure the platform operates smoothly, 
                 maintaining a safe and vibrant space for artistic expression to flourish. 
                 Together, we are building a global community where every artist has the tools, 
                 resources, and support they need to unleash their full creative potential.</p>
        </div>
        <div class="category">
            <img src={privacy_policy} alt= "Privacy Policy" />
            <h2>Privacy Policy:</h2>
            <p>At our platform, we are committed to protecting the privacy and security of our users' 
                information. Here are some key points from our Privacy Policy:
                
                Data Security: We employ robust security measures to safeguard user data against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive information and regular monitoring of our systems for potential vulnerabilities.
                Collection of Information: We collect only the information necessary to provide and improve our platform's services. This may include personal information provided by users during account creation, such as name, email address, and profile information, as well as data generated through user interactions with the platform.
                Use of Information: The information collected is used primarily to personalize user experience, facilitate communication and collaboration among users, and improve the functionality of the platform. We do not sell or share user information with third parties for marketing purposes without explicit consent.
                Third-Party Services: We may use third-party services and tools to enhance the functionality of our platform. These third parties are required to adhere to strict privacy and security standards, and their use of user data is governed by their respective privacy policies.
                Data Retention: We retain user data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Users have the right to request access to, correction of, or deletion of their personal information.
                Cookies and Tracking Technologies: We may use cookies and similar tracking technologies to enhance user experience and gather information about how the platform is used. Users can control cookie preferences through their browser settings.
                Children's Privacy: Our platform is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children. Parents or guardians who believe their child has provided personal information to us without their consent can contact us to request its removal.
                Updates to Privacy Policy: We may update our Privacy Policy from time to time to reflect changes in our practices or applicable laws. Users will be notified of any significant changes, and their continued use of the platform constitutes acceptance of the updated policy.</p>
        </div>
    </section>

    <footer id="footer1">
        <h1>Our Team</h1>
        <h3>"Craft a website that not only captures attention but also leaves a lasting impression, reflecting our brand's essence and values."</h3>
        <section class="category-section">
            <div class="category">
                <img src={codder} alt="Ayur Hansda" />
                <h2>Ayur Hansda</h2>
                <p>"the CODDER"</p>
            </div>
            <div class="category">
                <img src={planner} alt="Enter Marandi" />
                <h2>Enter Marandi</h2>
                <p>"The PLANNER"</p>
            </div>
            <div class="category">
                <img src={designer} alt="Manoj Hansda" />
                <h2>Manoj Hansda</h2>
                <p>"The designer"</p>
            </div>
        </section>
    </footer>
</body>
    	</div>
  	);
}

export default AboutUs;
