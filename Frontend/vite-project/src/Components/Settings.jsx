import React, { useState } from 'react';

const Settings = () => {
  const [userName, setUserName] = useState('Sahil Tiwari');
  const [currency, setCurrency] = useState('INR (₹)');
  const [monthlyBudget, setMonthlyBudget] = useState('25000');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const clearGuestData = () => {
    if (window.confirm('Are you sure you want to clear all guest expenses?')) {
      localStorage.removeItem('spendwise_guest_expenses');
      alert('Guest data cleared successfully!');
      window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Account Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your preferences, monthly limits, and application data.</p>
      </div>

      {savedMessage && (
        <div className="mb-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
          <span>✅</span> Settings updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-xl font-bold border-b border-white/10 pb-3">👤 Profile Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Display Name</label>
              <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
              <input 
                type="email" 
                disabled
                value="sahil@example.com"
                className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-gray-400 text-sm cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Financial Preferences */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-xl font-bold border-b border-white/10 pb-3">💰 Financial Preferences</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Currency</label>
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                <option value="USD ($)">USD ($) - US Dollar</option>
                <option value="EUR (€)">EUR (€) - Euro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Monthly Spending Limit (₹)</label>
              <input 
                type="number" 
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Notifications & Data Control */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-xl font-bold border-b border-white/10 pb-3">⚙️ System & Notifications</h3>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-white text-sm">Email Alerts for Budget Limit</p>
              <p className="text-xs text-gray-400">Receive an email notification when you cross 80% of your budget.</p>
            </div>
            <input 
              type="checkbox" 
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
              className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
            />
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="font-medium text-red-400 text-sm">Clear Guest Local Storage Data</p>
              <p className="text-xs text-gray-400">Permanently delete all locally stored guest mode transactions.</p>
            </div>
            <button 
              type="button"
              onClick={clearGuestData}
              className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
            >
              Clear Local Data
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3.5 rounded-xl shadow-lg transition-all"
        >
          Save All Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;