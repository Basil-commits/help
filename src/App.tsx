import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
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