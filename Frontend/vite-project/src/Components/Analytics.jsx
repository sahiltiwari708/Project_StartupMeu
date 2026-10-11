import React from 'react';

const Analytics = () => {
  // Dummy data - baad mein backend se fetch kar sakte hain
  const categoryData = [
    { category: 'Food & Drinks', amount: 4500, percentage: 40, color: 'bg-pink-500' },
    { category: 'Utilities & Bills', amount: 3200, percentage: 28, color: 'bg-indigo-500' },
    { category: 'Travel & Transport', amount: 1800, percentage: 16, color: 'bg-emerald-500' },
    { category: 'Shopping', amount: 1850, percentage: 16, color: 'bg-purple-500' },
  ];

  const totalSpent = categoryData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Expense Analytics</h1>
        <p className="text-gray-400 text-sm mt-1">Visualize your spending patterns and category distribution.</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Total Expenses</p>
          <h3 className="text-3xl font-extrabold text-white mt-1">₹{totalSpent.toLocaleString('en-IN')}</h3>
          <span className="text-xs text-emerald-400 font-medium mt-2 inline-block">↓ 4.2% lower than last month</span>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Highest Spending Category</p>
          <h3 className="text-3xl font-extrabold text-indigo-400 mt-1">Food & Drinks</h3>
          <span className="text-xs text-gray-400 mt-2 inline-block">40% of total budget</span>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
          <p className="text-sm text-gray-400">Average Daily Spend</p>
          <h3 className="text-3xl font-extrabold text-purple-400 mt-1">₹373</h3>
          <span className="text-xs text-purple-300 font-medium mt-2 inline-block">Based on 30 days</span>
        </div>
      </div>

      {/* Category Breakdown Section */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6">Spending by Category</h3>
        
        <div className="space-y-6">
          {categoryData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-200">{item.category}</span>
                <span className="font-bold text-white">₹{item.amount.toLocaleString('en-IN')} ({item.percentage}%)</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-white/5">
                <div 
                  className={`h-full ${item.color} rounded-full transition-all duration-500`} 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;