import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4 md:col-span-1">
            <span className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              SpendWise
            </span>
            <p className="text-sm text-gray-400">
              Aapka personal finance assistant jo aapke kharche track karne aur savings badhane mein madad karta hai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</a></li>
              <li><a href="expenses" className="hover:text-indigo-400 transition-colors">Manage Expenses</a></li>
              <li><a href="analytics" className="hover:text-indigo-400 transition-colors">Analytics</a></li>
              <li><a href="settings" className="hover:text-indigo-400 transition-colors">Settings</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-indigo-400 cursor-pointer">🍔 Food & Drinks</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">💡 Bills & Utilities</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">🚗 Travel & Transport</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">🛍️ Shopping</span></li>
            </ul>
          </div>

          {/* Newsletter / Tech Stack Note */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tech Stack</h4>
            <p className="text-sm text-gray-400">
              Built with React.js, Node.js, Express, MongoDB, and Tailwind CSS. Developed for StartupMeu MERN Stack Assessment.
            </p>
            <div className="inline-block bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full border border-indigo-500/20">
              ⚡ Powered by Code0 Workflow
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 SpendWise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">GitHub Repository</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;