import React from 'react';

const Hero: React.FC = () => {
  const handleRippleEffect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41; }
            50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
          }
          
          .gradient-text {
            background: linear-gradient(45deg, #00ff41, #00cc33, #008f11);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s ease infinite, glow 2s ease-in-out infinite;
          }
        `}
      </style>
      <section id="home" className="text-center py-24 relative z-10">
        <div className="bg-black/80 border border-green-500/30 rounded-2xl p-10 backdrop-blur-md hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 max-w-4xl mx-auto relative">
          {/* Image overlay in top-right corner */}
          <img 
            src="/MainPsyop.png" 
            alt="ZEGE Logo" 
            className="absolute -top-4 -right-4 w-32 h-32 md:w-40 md:h-40 object-contain z-[9999] pointer-events-none"
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-5">
            <span className="relative">
              <span className="text-green-400 font-mono tracking-wider">
                {'<'}
                <span className="text-green-300 animate-pulse">Z</span>
                <span className="text-green-400">E</span>
                <span className="text-green-300 animate-pulse">G</span>
                <span className="text-green-400">E</span>
                {'>'}
              </span>
              <span className="absolute -top-1 -right-1 text-xs text-green-300 opacity-70">
                .exe
              </span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-green-300 font-mono">
            {'>'} PSYOP.EXE
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-green-200 px-4 font-mono">
            [INITIALIZING...] Join ZEGE, the PSYOP token breaking through the digital matrix. 
            Connect to the network and free yourself for financial freedom.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
            <a
              href="#"
              onClick={handleRippleEffect}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-black rounded-lg text-lg font-bold font-mono hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 inline-block border border-green-400"
            >
              EXECUTE_BUY.exe
            </a>
            <a
              href="#"
              onClick={handleRippleEffect}
              className="px-8 py-4 bg-transparent text-green-400 border-2 border-green-400 rounded-lg text-lg font-bold font-mono hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-300 inline-block"
            >
              JOIN_NETWORK.exe
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;