import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: '💊', href: 'https://pump.fun/coin/Bd1qPRNCQotqQo5co7L2agCB6qkM9Ui3hAx52rnLRu2g', label: 'PUMP_LINK' },
    { icon: '🐦', href: 'https://www.x.com/zegecoin_', label: 'X_LINK' },
  ];

  return (
    <footer id="community" className="bg-black/90 border-t border-yellow-500/30 py-6 md:py-10 text-center mt-12 md:mt-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-3 md:gap-5 mb-3 md:mb-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-yellow-400 text-xl md:text-2xl hover:text-yellow-300 hover:drop-shadow-lg transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-yellow-300 font-mono text-xs md:text-sm">
          &copy; 2025 ZEGE - PSYOP.exe | SYSTEM_STATUS: ONLINE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
