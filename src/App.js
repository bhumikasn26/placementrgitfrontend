// src/App.js

import React from 'react';
import './App.css'; // Import CSS file for styling
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import FeaturesSection from './src/components/FeaturesSection';
import TestimonialsSection from './src/components/TestimonialsSection';
import Footer from './src/components/Footer';
import homepage from './src/component/homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
