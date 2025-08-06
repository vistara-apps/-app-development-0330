import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Inventory from './pages/Inventory'
import Invoices from './pages/Invoices'
import CashFlow from './pages/CashFlow'
import Settings from './pages/Settings'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="container mx-auto px-4 py-8" role="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/cash-flow" element={<CashFlow />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
