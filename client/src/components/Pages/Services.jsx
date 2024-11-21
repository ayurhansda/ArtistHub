import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/Services.css";
import serviceConnection from "../assets/service-connection.jpg";
import serviceCollaboration from "../assets/service-collaboration.jpg";
import serviceHiring from "../assets/service-hiring.jpg";
import serviceSinger from "../assets/service-singer.jpg";
import serviceGuitarist from "../assets/service-guitarist.jpg";
import serviceDrummer from "../assets/service-drummer.jpg";
import serviceKeyboard from "../assets/service-keyboard.jpg";


function Services() {
	useEffect(() => {
		document.title = 'Services - Artist Hub';
	}, []);


	return (
    	<div>
		<section id="services-page">
		  <section id="header2">
              <h1>Our Services</h1>
              <p>Unlock Your Creative Potential. Discover how ArtistsHub can help you thrive as an artist.</p>
              <div class="input">
                  <input type="text" name="search" placeholder="Explore Now.." />
              </div>
          </section>

          <section class="category-section">
              <div class="category">
		<NavLink to="/contact">
                  <img src={serviceConnection} alt="service-connection" />
                  <h2>Connection</h2>
                  <p>"To not be one is even worse."</p>
		</NavLink>
              </div>
              <div class="category">
		<NavLink to="/contact">
                  <img src={serviceCollaboration} alt="service-collaboration" />
                  <h2>Collaboration</h2>
                  <p>"The better voice doesn't mean."</p>
		</NavLink>
              </div>
              <div class="category">
		<NavLink to="/contact">
                  <img src={serviceHiring} alt="service-hiring" />
                  <h2>Hiring</h2>
                  <p>"There are shortcuts to happiness."</p>
		</NavLink>
              </div>
          </section>

          <header>
              <h1>Meet the Artists</h1>
          </header>

	  <section class="category-section">
          <section class="category">
              <NavLink to="/contact">
              <img src={serviceSinger} alt="Artist" />
              <div class="role">
                  Artist
              </div>
              <div class="quote">
                  "Aguilar is like an old friend that is there with me."
              </div>
	      </NavLink>
          </section>

          <section class="category">
              <NavLink to="/contact">
              <img src={serviceGuitarist} alt="Artist" />
              <div class="role">
                  Guitarist
              </div>
              <div class="quote">
                  "Let your fingers dance across the frets."
              </div>
	      </NavLink>
          </section>

          <section class="category">
	      <NavLink to="/contact">
              <img src={serviceDrummer} alt="Artist" />
              <div class="role">
                  Drummer
              </div>
              <div class="quote">
                  "In the rhythm of life, drumming sets your soul free."
              </div>
	      </NavLink>
          </section>

          <section class="category">
	      <NavLink to="/contact">
              <img src={serviceKeyboard} alt="Artist" />
              <div class="role">
                  Keyboard player
              </div>
              <div class="quote">
                  "Keep creating beautiful harmonies!"
              </div>
	      </NavLink>
          </section>
		</section>
		</section>
    	</div>
  	);
}

export default Services;
