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
            0%, 100% { text-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00; }
            50% { text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00; }
          }
          
          .gradient-text {
            background: linear-gradient(45deg, #ffff00, #ffcc00, #ff8f00);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s ease infinite, glow 2s ease-in-out infinite;
          }
        `}
      </style>
      <section id="home" className="text-center py-12 md:py-24 relative z-10 px-4">
        <div className="bg-black/80 border border-yellow-500/30 rounded-xl md:rounded-2xl p-6 md:p-10 backdrop-blur-md hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 max-w-4xl mx-auto relative">
          {/* Image overlay - better mobile positioning */}
          <img 
            src="/SaluteHat.png" 
            alt="ZEGE Logo" 
            className="absolute top-2 right-2 w-20 h-20 md:-top-32 md:-right-36 md:w-80 md:h-80 object-contain z-[9999] pointer-events-none"
          />
          <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-5">
            <span className="relative">
              <span className="text-yellow-400 font-mono tracking-wider">
                {'<'}
                <span className="text-yellow-300 animate-pulse">Z</span>
                <span className="text-yellow-400">E</span>
                <span className="text-yellow-300 animate-pulse">G</span>
                <span className="text-yellow-400">E</span>
                <span className="text-yellow-300 animate-pulse">C</span>
                <span className="text-yellow-400">O</span>
                <span className="text-yellow-300 animate-pulse">I</span>
                <span className="text-yellow-400">N</span>
                {'>'}
              </span>
              <span className="absolute -top-1 -right-1 text-xs text-yellow-300 opacity-70">
                .exe
              </span>
            </span>
          </h1>
          
          <h2 className="text-lg md:text-3xl mb-4 md:mb-8 text-yellow-300 font-mono">
            {'>'} <a
              href="https://www.x.com/zegecoin_"
              onClick={handleRippleEffect}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              PSYOP.exe
            </a>
          </h2>
          <p className="text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed text-yellow-200 px-2 md:px-4 font-mono">
            [INITIALIZING...] Join ZEGE, the PSYOP token breaking through the digital matrix. 
            Connect to the network and free yourself for financial freedom.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center mt-6 md:mt-10">
            <a
              href="https://www.pump.fun"
              onClick={handleRippleEffect}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black rounded-lg text-base md:text-lg font-bold font-mono hover:-translate-y-1 hover:shadow-2xl hover:shadow-400/50 transition-all duration-300 inline-block border border-yellow-400"
            >
              EXECUTE_BUY.exe
            </a>
            <a
              href="https://www.x.com/zegecoin_"
              onClick={handleRippleEffect}
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg text-base md:text-lg font-bold font-mono hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 inline-block"
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