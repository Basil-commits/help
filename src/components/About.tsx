import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-5 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-green-400/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/10 rounded-full blur-lg animate-pulse"></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-0 text-green-500/20 font-mono text-xs leading-none animate-pulse">
          01001010<br/>11010110<br/>00110101<br/>10101011<br/>01110010
        </div>
        <div className="absolute top-20 right-20 text-green-500/20 font-mono text-xs leading-none animate-pulse">
          ZEGE<br/>PSYOP<br/>MATRIX<br/>EXEC<br/>INIT
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-green-400 font-mono transform -rotate-2 inline-block">
            <span className="bg-black border-2 border-green-500 px-6 py-3 rounded-2xl shadow-lg shadow-green-500/20">
              {'>'} ABOUT_PSYOP.exe
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full rounded-full shadow-lg shadow-green-500/50"></div>
          
          {/* Timeline Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-6 h-6 bg-green-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-96 w-6 h-6 bg-green-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32 w-6 h-6 bg-green-400 border-4 border-black rounded-full shadow-lg animate-pulse"></div>

          {/* Content Blocks */}
          <div className="space-y-24">
            
            {/* Mission Statement - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16">
                <div className="bg-black/90 border-2 border-green-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-green-500/20 transform -rotate-1 max-w-md hover:border-green-400/70 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                    <span className="text-green-400 mr-2">{'>'}</span>
                    MISSION_STATEMENT.txt
                  </h3>
                  <p className="text-green-100 leading-relaxed font-mono">
                    ZEGE is more than a token—it's a psychological operation designed to break the traditional financial matrix. 
                    We're building a community of digital rebels who understand that true freedom comes from decentralized power 
                    and collective awakening.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16">
                <div className="w-64 h-64 bg-gradient-to-br from-green-900/50 to-black border-2 border-green-500/50 rounded-2xl shadow-xl shadow-green-500/20 p-6 flex items-center justify-center transform rotate-1 backdrop-blur-md">
                  <div className="text-center font-mono">
                    <div className="text-4xl text-green-400 mb-2">{'<ZEGE>'}</div>
                    <div className="text-green-300 text-sm animate-pulse">INITIALIZING...</div>
                    <div className="text-green-500 text-xs mt-2">PSYOP.exe</div>
                    <div className="text-green-400 text-xs mt-1">[ACTIVE]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The PSYOP Concept - Right Side */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16">
                <div className="bg-black/90 border-2 border-green-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-green-500/20 transform rotate-1 max-w-md hover:border-green-400/70 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                    <span className="text-green-400 mr-2">{'>'}</span>
                    THE_PSYOP.exe
                  </h3>
                  <p className="text-green-100 leading-relaxed font-mono">
                    Our PSYOP isn't about manipulation—it's about liberation. We use the tools of the digital age to create 
                    awareness, build community, and establish a new paradigm where financial freedom is accessible to all. 
                    Every holder becomes an agent of change.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16">
                <div className="w-64 h-64 bg-gradient-to-br from-black to-green-900/50 border-2 border-green-500/50 rounded-2xl shadow-xl shadow-green-500/20 p-6 flex items-center justify-center transform -rotate-1 backdrop-blur-md">
                  <div className="text-center font-mono">
                    <div className="text-3xl text-green-400 mb-2">⚡</div>
                    <div className="text-green-300 font-bold">LIBERATION</div>
                    <div className="text-green-500 text-sm animate-pulse mt-2">PROTOCOL</div>
                    <div className="text-green-400 text-xs">[RUNNING]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Effect - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16">
                <div className="bg-black/90 border-2 border-green-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-green-500/20 transform -rotate-1 max-w-md hover:border-green-400/70 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                    <span className="text-green-400 mr-2">{'>'}</span>
                    NETWORK_EFFECT.dll
                  </h3>
                  <p className="text-green-100 leading-relaxed font-mono">
                    Built on the principle that collective action creates exponential results. As our network grows, 
                    so does our power to reshape the financial landscape. Join the movement and become part of the 
                    most innovative psychological operation in crypto history.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-start lg:pl-16">
                <div className="w-64 h-64 bg-gradient-to-br from-green-900/50 to-black border-2 border-green-500/50 rounded-2xl shadow-xl shadow-green-500/20 p-6 flex items-center justify-center transform rotate-1 backdrop-blur-md">
                  <div className="text-center font-mono">
                    <div className="text-3xl text-green-400 mb-2">🔗</div>
                    <div className="text-green-300 font-bold">NETWORK</div>
                    <div className="text-green-500 text-sm animate-pulse mt-2">EXPANDING</div>
                    <div className="text-green-400 text-xs">[ONLINE]</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-green-600/20 to-green-400/20 border-2 border-green-400/50 rounded-xl px-8 py-6 backdrop-blur-md shadow-lg shadow-green-400/20 transform hover:scale-105 transition-all duration-300">
            <p className="text-green-300 font-mono text-lg mb-2 animate-pulse">
              [STATUS: OPERATIONAL]
            </p>
            <p className="text-green-100 font-mono">
              Ready to join the revolution? The matrix awaits your decision.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Terminal Elements */}
      <div className="absolute top-20 left-20 animate-bounce opacity-30">
        <div className="text-green-400 font-mono text-sm">{'> INIT'}</div>
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse opacity-30">
        <div className="text-green-400 font-mono text-sm">{'EXEC_'}</div>
      </div>
    </section>
  );
};

export default About;