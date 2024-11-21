//Home.jsx
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/Home.css";
import musician from "../assets/musician.jpg";
import singer from "../assets/singer.jpg";
import dancer from "../assets/dancer.jpg";
import videographer from "../assets/videographer.jpg";
import editor from "../assets/editor.jpg";
import connect from "../assets/connect.jpg";
import collaborate from "../assets/collaborate.jpg";
import hiring from "../assets/hiring.jpg";

function Home() {

  useEffect(() => {
          document.title = 'Home - Artist Hub';
        }, []);


  return (
    <div>
      <body>
    <header id="home">
	  <div className="homesize">
        <h1>Artist Hub</h1>
	  </div>
        <h2>Connections Collaboration Hiring</h2>
       <h6>Welcome to Artist Hub, where connections are forged, collaboration thrives, and talent meets opportunity</h6>
        
    </header>

    <main>
        <section class="category-section">
            <div class="category">
	        <NavLink to="/services">
                <img src={musician} alt="Musician" />
                <h2>Musician</h2>
                <p>"To Not be one is even worse."</p>
	        </NavLink>
            </div>
            <div class="category">
	        <NavLink to="/services">
                <img src={singer} alt="Singer" />
                <h2>Singer</h2>
                <p>"The better voice doesn't mean."</p>
	        </NavLink>
            </div>
            <div class="category">
	        <NavLink to="/services">
                <img src={dancer} alt="Dancer" />
                <h2>Dancer</h2>
                <p>"There are shortcuts to happiness."</p>
	        </NavLink>
            </div>
            <div class="category">
	        <NavLink to="services">
                <img src={videographer} alt="Videographer" />
                <h2>Videographer</h2>
                <p>"Every frame of a video is an opportunity."</p>
	        </NavLink>
            </div>
            <div class="category">
	        <NavLink to="/services">
                <img src={editor} alt="Editor" />
                <h2>Editor</h2>
                <p>"When I started editing on my home."</p>
	        </NavLink>
            </div>
        </section>

        <section class="feature-section">
            <h1>Artists Hub</h1>
            <p>Discover, connect, and collaborate with artists around the world.</p>
            <div class="category-section">
                <div class="category">
	            <NavLink to="/contact">
                    <img src={connect} alt="Connect" />
                    <button class="my-button">Connect</button>
                    <p>Connect with like-minded artists for creative collaborations.</p>
	            </NavLink>
                </div>
                <div class="category">
	            <NavLink to="/contact">
                    <img src={collaborate} alt="Collaborate" />
                    <button class="my-button">Collaborate</button>
                    <p>Collaborate with other artists to create inspiring projects.</p>
	            </NavLink>
                </div>
                <div class="category">
	            <NavLink to="/contact">
                    <img src={hiring} alt="Hiring" />
                    <button class="my-button" align="center">Hiring</button>
                    <p>Discover talented artists available for hire.</p>
	            </NavLink>
                </div>
            </div>
        </section>

        <footer id="footer1">
            <h1>Artists change the world.</h1>
            <p>ARTIST login to change the WORLD</p>
        </footer>

    </main>  
</body>
    </div>
  );
}

export default Home;

                   
