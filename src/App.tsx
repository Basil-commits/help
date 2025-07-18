import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [hasEnteredSite, setHasEnteredSite] = useState(false);

  const handleEnterSite = () => {
    setHasEnteredSite(true);
  };

  // Show landing page first
  if (!hasEnteredSite) {
    return <LandingPage onEnter={handleEnterSite} />;
  }

  // Show main website after entering
  return (
    <div className="min-h-screen bg-black text-green-100 overflow-x-hidden">
      <MatrixBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <Header />
        <Hero />
        <Features />
        <Stats />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;