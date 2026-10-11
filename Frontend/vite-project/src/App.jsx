import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import ExpenseList from './Components/ExpenseList'
import Analytics from './Components/Analytics'
import Dashboard from './Components/Dashboard'
import Home from './home/Home'
import Settings from './Components/Settings'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
        <Home />
      </div>
    </Router>
  )
}

export default App