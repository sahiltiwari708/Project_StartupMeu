import React, { useState } from 'react';

const Dashboard = () => {
  // Dummy state - baad mein backend API se data yahan aayega
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Groceries & Vegetables', category: 'Food', amount: 1200, date: '2026-10-11' },
    { id: '2', title: 'Electricity Bill', category: 'Utilities', amount: 2450, date: '2026-10-10' },
    { id: '3', title: 'Petrol / Fuel', category: 'Travel', amount: 800, date: '2026-10-09' },
  ]);

  const totalBalance = 48550;
  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen text-white">
      {/* Welcome Banner Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 p-8 rounded-3xl shadow-2xl mb-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <span className="bg-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-400/30">
            ⚡ Welcome Back
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-3">Financial Dashboard</h1>
          <p className="text-gray-300 text-sm mt-1 max-w-xl">
            Monitor your live balance, review recent spending activities, and stay on top of your financial goals.
          </p>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Total Balance</p>
          <h3 className="text-3xl font-extrabold text-white mt-1">₹{totalBalance.toLocaleString('en-IN')}</h3>
          <span className="text-xs text-emerald-400 font-medium mt-2 inline-block">+12.4% this month</span>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Total Expenses</p>
          <h3 className="text-3xl font-extrabold text-red-400 mt-1">-₹{totalSpent.toLocaleString('en-IN')}</h3>
          <span className="text-xs text-gray-400 mt-2 inline-block">Across {expenses.length} transactions</span>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Active Category</p>
          <h3 className="text-3xl font-extrabold text-indigo-400 mt-1">Food & Bills</h3>
          <span className="text-xs text-purple-300 font-medium mt-2 inline-block">Optimized budget</span>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <a href="/expenses" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">View All →</a>
        </div>

        <div className="space-y-4">
          {expenses.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                  💳
                </div>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.date} • <span className="text-indigo-300">{item.category}</span></p>
                </div>
              </div>
              <span className="font-bold text-red-400">-₹{item.amount.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;