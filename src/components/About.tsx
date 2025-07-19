import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/80 border border-green-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-md hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 font-mono">
              {'>'} ABOUT_PSYOP.exe
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            
            {/* Mission Statement */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                <span className="text-green-400 mr-2">{'>'}</span>
                MISSION_STATEMENT.txt
              </h3>
              <p className="text-green-100 leading-relaxed font-mono text-lg">
                ZEGE is more than a token—it's a psychological operation designed to break the traditional financial matrix. 
                We're building a community of digital rebels who understand that true freedom comes from decentralized power 
                and collective awakening.
              </p>
            </div>

            {/* The PSYOP Concept */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                <span className="text-green-400 mr-2">{'>'}</span>
                THE_PSYOP.exe
              </h3>
              <p className="text-green-100 leading-relaxed font-mono text-lg">
                Our PSYOP isn't about manipulation—it's about liberation. We use the tools of the digital age to create 
                awareness, build community, and establish a new paradigm where financial freedom is accessible to all. 
                Every holder becomes an agent of change.
              </p>
            </div>

            {/* Community Power */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-300 font-mono mb-4 flex items-center">
                <span className="text-green-400 mr-2">{'>'}</span>
                NETWORK_EFFECT.dll
              </h3>
              <p className="text-green-100 leading-relaxed font-mono text-lg">
                Built on the principle that collective action creates exponential results. As our network grows, 
                so does our power to reshape the financial landscape. Join the movement and become part of the 
                most innovative psychological operation in crypto history.
              </p>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-green-600/20 to-green-400/20 border border-green-400/30 rounded-xl px-8 py-6">
              <p className="text-green-300 font-mono text-lg mb-2">
                [STATUS: OPERATIONAL]
              </p>
              <p className="text-green-100 font-mono">
                Ready to join the revolution? The matrix awaits your decision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;