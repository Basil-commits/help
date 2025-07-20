import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about', isExternal: false },
    { name: 'How to Buy', href: '#features', isExternal: false },
    { name: 'Buy', href: 'https://pump.fun/coin/EyGPf7hzZ2nU5GBLEiedYB4p9C7QDZqNtf2xjSMJBhy9', isExternal: true },
    { name: 'Community', href: 'https://www.x.com/zegecoin_', isExternal: true }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) {
      // Let the default behavior handle external links
      return;
    }
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-center md:justify-between items-center p-5 backdrop-blur-md bg-black/80 border border-yellow-500/30 rounded-2xl mx-5 mt-5 relative z-[10000] shadow-lg shadow-yellow-500/20">
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
          <span className="relative">
            <span className="text-yellow-400 font-mono tracking-wider">
              {'<'}
              <span className="text-yellow-300 animate-pulse">W</span>
              <span className="text-yellow-400">L</span>
              <span className="text-yellow-300 animate-pulse">F</span>
              <span className="text-yellow-400">I</span>
              {'>'}
            </span>
            <span className="absolute -top-1 -right-1 text-xs text-yellow-300 opacity-70">
              .exe
            </span>
          </span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none gap-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href, item.isExternal)}
              className="text-yellow-300 no-underline font-medium hover:text-yellow-400 transition-all duration-300 hover:text-shadow-lg hover:text-shadow-yellow-400/50"
              {...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute right-5 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-yellow-500/30 rounded-lg shadow-lg shadow-yellow-500/20 z-[10001]">
          <ul className="list-none p-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.href, item.isExternal);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 text-yellow-300 no-underline font-medium hover:text-yellow-400 hover:bg-yellow-500/10 rounded-md transition-all duration-200"
                  {...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
