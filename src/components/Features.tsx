import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '💳',
      title: 'CREATE_SOLANA_WALLET',
      description: "Set up your Phantom Wallet or any Solana-compatible wallet to manage transactions effortlessly."
    },
    {
      icon: '🏪',
      title: 'GET_SOLANA',
      description: "Deposit SOL (Solana) from the mainnet into your wallet, which you will later use for transactions of the Solana network"
    },
    {
      icon: '💰',
      title: 'SWAP_TO_ZEGE',
      description: "To swap SOL for ZEGE using Phantom, open your wallet, go to the Swap tab, select SOL in the \"From\" field, paste the ZEGE token address in the \"To\" field, enter the amount of SOL you want to swap, review the details, and press Swap."
    },
    {
      icon: '🇺🇸',
      title: 'WORLD_LIBERTY_FI',
      description: "Become a part of the WLFI ecosystem. \nMake America Great Again."
    }
  ];

  return (
    <div>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
      
      {/* HOW TO BUY Banner */}
      <section className="text-center py-4 md:py-6 relative z-10 px-4">
        <div className="bg-black/80 border border-yellow-500/30 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-md hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            <span className="text-yellow-400 font-mono tracking-wider">
              &lt;
              <span className="text-yellow-300 animate-pulse">H</span>
              <span className="text-yellow-400">O</span>
              <span className="text-yellow-300 animate-pulse">W</span>
              <span className="text-yellow-400"> </span>
              <span className="text-yellow-300 animate-pulse">T</span>
              <span className="text-yellow-400">O</span>
              <span className="text-yellow-400"> </span>
              <span className="text-yellow-300 animate-pulse">B</span>
              <span className="text-yellow-400">U</span>
              <span className="text-yellow-300 animate-pulse">Y</span>
              &gt;
            </span>
          </h2>
          <p className="text-yellow-300 font-mono text-sm md:text-lg">
            &gt; EXECUTE_PURCHASE_PROTOCOL.exe
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-6 md:my-12 px-4 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/80 border border-yellow-500/30 rounded-xl md:rounded-2xl p-6 md:p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
          >
            <div className="text-3xl md:text-5xl mb-3 md:mb-5">{feature.icon}</div>
            <h3 className="text-lg md:text-xl mb-2 md:mb-4 text-yellow-400 font-semibold font-mono">
              {feature.title}
            </h3>
            <p className="leading-relaxed text-yellow-200 font-mono text-xs md:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;