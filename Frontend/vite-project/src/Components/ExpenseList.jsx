import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  // LocalStorage se initial data load karna taaki page refresh hone par data na ude
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('spendwise_guest_expenses');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: '1', title: 'Groceries & Vegetables', category: 'Food', amount: 1200, date: '2026-10-11' },
      { id: '2', title: 'Electricity Bill', category: 'Utilities', amount: 2450, date: '2026-10-10' },
      { id: '3', title: 'Petrol / Fuel', category: 'Travel', amount: 800, date: '2026-10-09' },
      { id: '4', title: 'New Headset', category: 'Shopping', amount: 2999, date: '2026-10-07' },
    ];
  });

  // Jab bhi expenses update ho, localStorage mein save ho jaye
  useEffect(() => {
    localStorage.setItem('spendwise_guest_expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Form states
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Add Expense Handler (Instant Guest Addition)
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now().toString(),
      title,
      category,
      amount: Number(amount),
      date
    };

    setExpenses([newExpense, ...expenses]);
    setTitle('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const filteredExpenses = expenses.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalAmount = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen text-white">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold">Expense Management</h1>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30 font-medium">
              ⚡ Guest Mode Active
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">Add and calculate your expenses instantly without signing in.</p>
        </div>
        <div className="bg-slate-900 border border-white/10 px-5 py-3 rounded-2xl shadow-xl">
          <p className="text-xs text-gray-400">Total Filtered Amount</p>
          <p className="text-xl font-bold text-indigo-400">₹{totalAmount.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Add Form */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl h-fit">
          <h3 className="text-xl font-bold mb-4">➕ Add New Expense</h3>
          
          <form onSubmit={handleAddExpense} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Title</label>
              <input 
                type="text" 
                required
                placeholder="e.g., Dinner with friends"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              >
                <option value="Food">Food</option>
                <option value="Utilities">Utilities</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Amount (₹)</label>
              <input 
                type="number" 
                required
                placeholder="500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Date</label>
              <input 
                type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg transition-all mt-2"
            >
              Add Expense
            </button>
          </form>
        </div>

        {/* Right Side: Filters & Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-72 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 text-sm"
            />

            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1">
              {['All', 'Food', 'Utilities', 'Travel', 'Shopping'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {filteredExpenses.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p>No expenses found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-xs uppercase bg-white/5">
                      <th className="py-3 px-6">Title</th>
                      <th className="py-3 px-6">Category</th>
                      <th className="py-3 px-6">Date</th>
                      <th className="py-3 px-6">Amount</th>
                      <th className="py-3 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-200 text-sm">
                    {filteredExpenses.map((expense) => (
                      <tr key={expense.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-6 font-medium text-white">{expense.title}</td>
                        <td className="py-3 px-6">
                          <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1 rounded-full text-xs">
                            {expense.category}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-gray-400">{expense.date}</td>
                        <td className="py-3 px-6 font-bold text-red-400">-₹{expense.amount.toLocaleString('en-IN')}</td>
                        <td className="py-3 px-6 text-right">
                          <button
                            onClick={() => handleDelete(expense.id)}
                            className="text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 px-3 py-1 rounded-lg text-xs transition-all border border-red-500/20"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;