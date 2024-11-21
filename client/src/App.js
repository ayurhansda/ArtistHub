import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Error from './components/Pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
	  <Navbar />
	  <div>
	    <Routes>
	        <Route path="/" exact element={<Home />} />
	  	<Route path="/home" element={<Home />} />}
        	<Route path="/about" element={<About />} />
        	<Route path="/contact" element={<Contact />} />
        	<Route path="/services" element={<Services />} />
	  	<Route path="/register" element={<Register />} />
	  	<Route path="/login" element={<Login />} />
		<Route path="*" element={<Error />} />
	    </Routes>
          </div>
          <Footer />
      </Router>
  );
}

export default App;

