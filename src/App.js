import React from 'react';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Team from './Component/Team';
import Skill from './Component/Skill';
import Portfolio from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <Team />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
