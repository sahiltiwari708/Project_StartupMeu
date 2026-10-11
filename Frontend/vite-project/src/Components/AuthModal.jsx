import React, { useState, useEffect } from 'react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-white/10 w-full max-w-md p-8 rounded-3xl shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full border border-white/10"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-white">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {isLogin ? 'Login to manage your personal expenses' : 'Sign up to track your financial goals'}
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" required placeholder="Sahil" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500" />
            </div>
          )}
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
            <input type="email" required placeholder="name@example.com" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Password</label>
            <input type="password" required placeholder="••••••••" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg transition-all mt-2">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-indigo-400 hover:underline font-semibold ml-1">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;