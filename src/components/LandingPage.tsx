import React from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const handleClick = () => {
    onEnter();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-black"></div>
      
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-green-400 font-mono text-xs animate-pulse">01010101</div>
        <div className="absolute top-20 right-20 text-green-400 font-mono text-xs animate-pulse">11001100</div>
        <div className="absolute bottom-20 left-20 text-green-400 font-mono text-xs animate-pulse">10101010</div>
        <div className="absolute bottom-10 right-10 text-green-400 font-mono text-xs animate-pulse">00110011</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Image */}
        <div className="mb-8">
          <img 
            src="/MainPsyop.png" 
            alt="ZEGE PSYOP" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain animate-pulse cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleClick}
          />
        </div>



        {/* Enter Button */}
        <button
          onClick={handleClick}
          className="group relative px-12 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono text-lg font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/50 hover:scale-105"
        >
          <span className="relative z-10">ENTER_MATRIX.exe</span>
          <div className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
        </button>

        {/* Loading text */}
        <p className="mt-8 text-green-300 font-mono text-sm opacity-60 animate-pulse">
          [INITIALIZING PSYOP PROTOCOL...]
        </p>
      </div>

      {/* Glitch Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 opacity-30 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300 opacity-40 animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-green-400 opacity-50 animate-ping animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default LandingPage;