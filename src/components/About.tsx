import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-5 relative">

      <div className="max-w-6xl mx-auto relative z-10 px-2 md:px-0">
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-yellow-400 font-mono transform -rotate-2 inline-block">
            <span className="bg-black border-2 border-yellow-500 px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl shadow-lg shadow-yellow-500/20">
              {'>'} ABOUT_PSYOP.exe
            </span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mt-2 md:mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full rounded-full shadow-lg shadow-yellow-500/50"></div>
          
          {/* Timeline Dots */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-32 w-6 h-6 bg-yellow-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-96 w-6 h-6 bg-yellow-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-32 w-6 h-6 bg-yellow-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>

          {/* Content Blocks */}
          <div className="space-y-8 md:space-y-24">
            
            {/* Mission Statement - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 w-full">
                <div className="bg-black/90 border-2 border-yellow-500/50 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-xl shadow-yellow-500/20 transform -rotate-1 max-w-sm md:max-w-md hover:border-yellow-400/70 transition-all duration-300 w-full">
                  <h3 className="text-lg md:text-2xl font-bold text-yellow-300 font-mono mb-2 md:mb-4 flex items-center">
                    <span className="text-yellow-400 mr-2">{'>'}</span>
                    MISSION_STATEMENT.txt
                  </h3>
                  <p className="text-yellow-100 leading-relaxed font-mono text-sm md:text-base">
                    ZEGE is more than a token—it's a psychological operation designed to break the traditional financial matrix. 
                    We're building a community of digital rebels who understand that true freedom comes from decentralized power 
                    and collective awakening.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16 w-full">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-900/50 to-black border-2 border-yellow-500/50 rounded-xl md:rounded-2xl shadow-xl shadow-yellow-500/20 p-4 md:p-6 flex items-center justify-center transform rotate-1 backdrop-blur-md">
                    <div className="text-center font-mono">
                      <div className="text-2xl md:text-4xl text-yellow-400 mb-1 md:mb-2">{'<ZEGE>'}</div>
                      <div className="text-yellow-300 text-xs md:text-sm animate-pulse">INITIALIZING...</div>
                      <div className="text-yellow-500 text-xs mt-2">PSYOP.exe</div>
                      <div className="text-yellow-400 text-xs mt-1">[ACTIVE]</div>
                    </div>
                  </div>
                  {/* Statue Image Overlay */}
                  <img 
                    src="/Statue.png" 
                    alt="Statue" 
                    className="absolute -top-4 -right-20 w-40 h-40 md:-top-8 md:-right-40 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain z-[9999] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* The PSYOP Concept - Right Side */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 md:gap-8 mb-8 md:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16 w-full">
                <div className="bg-black/90 border-2 border-yellow-500/50 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-xl shadow-yellow-500/20 transform rotate-1 max-w-sm md:max-w-md hover:border-yellow-400/70 transition-all duration-300 w-full">
                  <h3 className="text-lg md:text-2xl font-bold text-yellow-300 font-mono mb-2 md:mb-4 flex items-center">
                    <span className="text-yellow-400 mr-2">{'>'}</span>
                    THE_PSYOP.exe
                  </h3>
                  <p className="text-yellow-100 leading-relaxed font-mono text-sm md:text-base">
                    Our PSYOP isn't about manipulation—it's about liberation. We use the tools of the digital age to create 
                    awareness, build community, and establish a new paradigm where financial freedom is accessible to all. 
                    Every holder becomes an agent of change.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 w-full">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-black to-yellow-900/50 border-2 border-yellow-500/50 rounded-xl md:rounded-2xl shadow-xl shadow-yellow-500/20 p-4 md:p-6 flex items-center justify-center transform -rotate-1 backdrop-blur-md">
                  <div className="text-center font-mono">
                    <div className="text-2xl md:text-3xl text-yellow-400 mb-1 md:mb-2">⚡</div>
                    <div className="text-yellow-300 font-bold text-sm md:text-base">LIBERATION</div>
                    <div className="text-yellow-500 text-xs md:text-sm animate-pulse mt-1 md:mt-2">PROTOCOL</div>
                    <div className="text-yellow-400 text-xs">[RUNNING]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Effect - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 w-full">
                <div className="bg-black/90 border-2 border-yellow-500/50 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-xl shadow-yellow-500/20 transform -rotate-1 max-w-sm md:max-w-md hover:border-yellow-400/70 transition-all duration-300 w-full">
                  <h3 className="text-lg md:text-2xl font-bold text-yellow-300 font-mono mb-2 md:mb-4 flex items-center">
                    <span className="text-yellow-400 mr-2">{'>'}</span>
                    NETWORK_EFFECT.dll
                  </h3>
                  <p className="text-yellow-100 leading-relaxed font-mono text-sm md:text-base">
                    Built on the principle that collective action creates exponential results. As our network grows, 
                    so does our power to reshape the financial landscape. Join the movement and become part of the 
                    most innovative psychological operation in crypto history.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16 w-full">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-900/50 to-black border-2 border-yellow-500/50 rounded-xl md:rounded-2xl shadow-xl shadow-yellow-500/20 p-4 md:p-6 flex items-center justify-center transform rotate-1 backdrop-blur-md">
                  <div className="text-center font-mono">
                    <div className="text-2xl md:text-3xl text-yellow-400 mb-1 md:mb-2">🔗</div>
                    <div className="text-yellow-300 font-bold text-sm md:text-base">NETWORK</div>
                    <div className="text-yellow-500 text-xs md:text-sm animate-pulse mt-1 md:mt-2">EXPANDING</div>
                    <div className="text-yellow-400 text-xs">[ONLINE]</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-16">
          <div className="inline-block bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border-2 border-yellow-400/50 rounded-lg md:rounded-xl px-4 py-3 md:px-8 md:py-6 backdrop-blur-md shadow-lg shadow-yellow-400/20 transform hover:scale-105 transition-all duration-300">
            <p className="text-yellow-300 font-mono text-sm md:text-lg mb-1 md:mb-2 animate-pulse">
              [STATUS: OPERATIONAL]
            </p>
            <p className="text-yellow-100 font-mono text-sm md:text-base">
              Ready to join the revolution? The matrix awaits your decision.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Terminal Elements */}
      <div className="absolute top-20 left-20 animate-bounce opacity-30">
        <div className="text-yellow-400 font-mono text-sm">{'> INIT'}</div>
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse opacity-30">
        <div className="text-yellow-400 font-mono text-sm">{'EXEC_'}</div>
      </div>
    </section>
  );
};

export default About;