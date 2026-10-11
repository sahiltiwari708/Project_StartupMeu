import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Glow Effect Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text and CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-indigo-500/30 text-indigo-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-indigo-400/30 backdrop-blur-sm">
              ✨ Smart Financial Control
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Manage Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Finances</span> Effortlessly.
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Track daily expenses, set category budgets, and visualize your spending habits in real-time with our sleek MERN-powered tracker.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5">
                Get Started Free
              </button>
              <Link to="/analytics" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all">
                View Analytics
              </Link>
            </div>
          </div>

          {/* Right Side: Dynamic Image / Card Preview */}
          <div className="relative flex justify-center">
            {/* Main Floating Card Container */}
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl animate-pulse-slow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-300">Total Balance</p>
                  <h3 className="text-2xl font-bold text-white">₹48,550.00</h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-medium">
                  +12.4% this month
                </span>
              </div>

              {/* Mock Expense Items for Dynamic Feel */}
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">🍔</div>
                    <div>
                      <p className="text-sm font-medium text-white">Groceries & Food</p>
                      <p className="text-xs text-gray-400">Today, 2:45 PM</p>
                    </div>
                  </div>
                  <span className="text-red-400 font-semibold">-₹1,200</span>
                </div>

                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">💡</div>
                    <div>
                      <p className="text-sm font-medium text-white">Electricity Bill</p>
                      <p className="text-xs text-gray-400">Yesterday</p>
                    </div>
                  </div>
                  <span className="text-red-400 font-semibold">-₹2,450</span>
                </div>
              </div>

              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block">
                <p className="text-xs text-indigo-200">Saved this month</p>
                <p className="text-lg font-bold">₹14,200</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;