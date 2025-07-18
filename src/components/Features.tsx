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
      description: "To swap SOL for ZEGE using Phantom, open your wallet, go to the Swap tab, select SOL in the "From" field, paste the ZEGE token address in the "To" field, enter the amount of SOL you want to swap, review the details, and press Swap."
    },
    {
      icon: '🇺🇸',
      title: 'WORLD_LIBERTY_FI',
      description: "Become a part of the WLFI ecosystem."
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
      
      {/* HOW TO BUY Banner */}
      <section className="text-center py-12 relative z-10">
        <div className="bg-black/80 border border-green-500/30 rounded-2xl p-8 backdrop-blur-md hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-400 font-mono tracking-wider">
              {'<'}
              <span className="text-green-300 animate-pulse">H</span>
              <span className="text-green-400">O</span>
              <span className="text-green-300 animate-pulse">W</span>
              <span className="text-green-400"> </span>
              <span className="text-green-300 animate-pulse">T</span>
              <span className="text-green-400">O</span>
              <span className="text-green-400"> </span>
              <span className="text-green-300 animate-pulse">B</span>
              <span className="text-green-400">U</span>
              <span className="text-green-300 animate-pulse">Y</span>
              {'>'}
            </span>
          </h2>
          <p className="text-green-300 font-mono text-lg">
            {'>'} EXECUTE_PURCHASE_PROTOCOL.exe
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 my-24 px-4 relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/80 border border-green-500/30 rounded-2xl p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300"
          >
            <div className="text-5xl mb-5">{feature.icon}</div>
            <h3 className="text-xl mb-4 text-green-400 font-semibold font-mono">
              {feature.title}
            </h3>
            <p className="leading-relaxed text-green-200 font-mono text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Features;