import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: '📱', href: '#', label: 'TELEGRAM_LINK' },
    { icon: '🐦', href: '#', label: 'x.com/zegecoin_' },
  ];

  return (
    <footer id="community" className="bg-black/90 border-t border-green-500/30 py-10 text-center mt-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-5 mb-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-green-400 text-2xl hover:text-green-300 hover:drop-shadow-lg transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-green-300 font-mono text-sm">
          &copy; 2024 ZEGE - DIGITAL_REVOLUTION.exe | SYSTEM_STATUS: ONLINE
        </p>
      </div>
    </footer>
  );
};

export default Footer;