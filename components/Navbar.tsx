import React, { useState, useEffect } from 'react';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import DiamondIcon from './icons/DiamondIcon';
import CoinIcon from './icons/CoinIcon';
import UserCircleIcon from './icons/UserCircleIcon';

const Header: React.FC = () => {
  const navItems = ['Courses', 'Projects', 'Internships'];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <div className="flex-shrink-0">
            <LogoIcon />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <div className="relative hidden lg:block">
              <input 
                type="text"
                placeholder=""
                className="w-80 pl-6 pr-14 py-3 bg-white/50 border-2 border-slate-300/70 rounded-full focus:bg-white focus:border-indigo-400 focus:outline-none transition-colors"
              />
              <button className="absolute inset-y-0 right-0 flex items-center justify-center w-14 h-full text-white bg-indigo-500 rounded-full hover:bg-indigo-600 transition-colors">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <a key={item} href={item} className="text-slate-700 font-semibold hover:text-indigo-500 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-3 md:space-x-5">
              <div className="flex items-center space-x-2 bg-white/80 px-3 py-1.5 rounded-full shadow-sm">
                  <DiamondIcon className="w-6 h-6 text-fuchsia-500" />
                  <span className="font-bold text-slate-700 text-sm hidden sm:inline">240</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-3 py-1.5 rounded-full shadow-sm">
                  <CoinIcon className="w-6 h-6 text-yellow-500" />
                  <span className="font-bold text-slate-700 text-sm hidden sm:inline">5433</span>
              </div>
              <button className="flex items-center space-x-2 pl-2 pr-4 py-1.5 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all transform hover:scale-105">
                  <UserCircleIcon className="w-8 h-8" />
                  <span className="font-semibold text-sm hidden sm:inline">username</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;