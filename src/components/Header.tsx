import React from 'react';

const Header: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center p-5 backdrop-blur-md bg-black/80 border border-green-500/30 rounded-2xl mx-5 mt-5 relative z-10 shadow-lg shadow-green-500/20">
      <div className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
      <div className="text-3xl font-bold text-green-400 drop-shadow-lg">
        <span className="relative">
          <span className="text-green-400 font-mono tracking-wider">
            {'<'}
            <span className="text-green-300 animate-pulse">Z</span>
            <span className="text-green-400">E</span>
            <span className="text-green-300 animate-pulse">G</span>
            <span className="text-green-400">E</span>
            {'>'}
          </span>
          <span className="absolute -top-1 -right-1 text-xs text-green-300 opacity-70">
            .exe
          </span>
        </span>
      </div>
      </div>
      <ul className="hidden md:flex list-none gap-8">
        {['Home', 'About', 'Tokenomics', 'Roadmap', 'Community'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              className="text-green-300 no-underline font-medium hover:text-green-400 transition-all duration-300 hover:text-shadow-lg hover:text-shadow-green-400/50"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;