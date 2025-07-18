import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: '$2.1M', label: 'NETWORK_VALUE' },
    { number: '15K+', label: 'ACTIVE_NODES' },
    { number: '100%', label: 'DECENTRALIZED' },
    { number: '⚡', label: 'DIGITAL_NATIVE' }
  ];

  return (
    <section id="tokenomics" className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-20 text-center px-4 relative z-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black/80 border border-green-500/30 p-8 rounded-xl backdrop-blur-md hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300"
        >
          <span className="text-3xl md:text-4xl font-bold text-green-400 block font-mono">
            {stat.number}
          </span>
          <span className="text-sm text-green-300 mt-2 block font-mono">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Stats;