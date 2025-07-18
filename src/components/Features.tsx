import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'QUANTUM_LEAP.exe',
      description: 'Engineered for digital supremacy, ZEGE breaks through firewalls and delivers exponential gains to network nodes.'
    },
    {
      icon: '🔒',
      title: 'ENCRYPTION_PROTOCOL',
      description: 'Military-grade smart contracts and transparent algorithms committed to building an unbreachable digital fortress.'
    },
    {
      icon: '🌐',
      title: 'NETWORK_COLLECTIVE',
      description: "Every protocol decision is consensus-driven by the network. We're architecting the future of decentralized finance."
    }
  ];

  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24 px-4 relative z-10">
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
  );
};

export default Features;