import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const location = useLocation();

  const isHome = location.pathname === '/';

  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-950/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo / Brand Name */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/30 group-hover:bg-indigo-500 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-2xl font-extrabold text-white tracking-wide group-hover:text-indigo-400 transition-colors">SpendWise</span>
              </Link>
            </div>

            {/* Desktop Navigation Links with Perfect Spacing */}
            <div className="hidden md:flex items-center space-x-8">
              {!isHome && (
                <Link 
                  to="/" 
                  className="flex items-center gap-1.5 text-gray-300 hover:text-indigo-400 font-medium transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-sm"
                >
                  🏠 Home
                </Link>
              )}

              <Link to="/dashboard" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors text-sm tracking-wide">Dashboard</Link>
              <Link to="/expenses" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors text-sm tracking-wide">Expenses</Link>
              <Link to="/analytics" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors text-sm tracking-wide">Analytics</Link>
              
              <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
                <Link to="/expenses" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition-all text-sm">
                  Get Started
                </Link>

                <button 
                  onClick={() => openAuth('login')}
                  className="flex flex-col items-center text-gray-300 hover:text-indigo-400 transition-colors text-xs px-2 py-1"
                >
                  <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>Login</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md bg-white/5 border border-white/10"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 pt-4 pb-6 space-y-3 shadow-xl">
            {!isHome && (
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-indigo-400 hover:bg-white/5">🏠 Home</Link>
            )}
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-white/5 hover:text-indigo-400">Dashboard</Link>
            <Link to="/expenses" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-white/5 hover:text-indigo-400">Expenses</Link>
            <Link to="/analytics" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-xl text-base font-medium text-gray-300 hover:bg-white/5 hover:text-indigo-400">Analytics</Link>
            
            <div className="pt-2 grid grid-cols-2 gap-3">
              <button 
                onClick={() => openAuth('login')}
                className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl font-medium border border-white/10 transition-all text-sm flex items-center justify-center gap-1.5"
              >
                <span>👤</span> Login
              </button>
              <button 
                onClick={() => openAuth('signup')}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-xl font-medium shadow-md transition-all text-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal Integration */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
};

export default Navbar;