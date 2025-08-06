import React, { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import PaywallFeature from '../components/PaywallFeature'

const CashFlow = () => {
  // Mock cash flow data
  const cashFlowData = [
    { month: 'Jan', income: 25000, expenses: 18000, net: 7000 },
    { month: 'Feb', income: 28000, expenses: 19500, net: 8500 },
    { month: 'Mar', income: 32000, expenses: 22000, net: 10000 },
    { month: 'Apr', income: 29000, expenses: 20500, net: 8500 },
    { month: 'May', income: 35000, expenses: 24000, net: 11000 },
    { month: 'Jun', income: 38000, expenses: 25500, net: 12500 },
  ]

  const forecastData = [
    { month: 'Jul', projected: 40000, confidence: 'high' },
    { month: 'Aug', projected: 42000, confidence: 'high' },
    { month: 'Sep', projected: 38000, confidence: 'medium' },
    { month: 'Oct', projected: 45000, confidence: 'medium' },
    { month: 'Nov', projected: 48000, confidence: 'low' },
    { month: 'Dec', projected: 52000, confidence: 'low' },
  ]

  const currentCashBalance = 125000
  const projectedShortfall = 0
  const averageMonthlyGrowth = 8.5

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cash Flow Management</h1>
        <p className="text-gray-600">Monitor and forecast your business cash flow</p>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Cash Balance</p>
              <p className="text-2xl font-bold text-green-600">
                ${currentCashBalance.toLocaleString()}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Growth Rate</p>
              <p className="text-2xl font-bold text-blue-600">{averageMonthlyGrowth}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projected Shortfall</p>
              <p className="text-2xl font-bold text-gray-600">
                {projectedShortfall > 0 ? `$${projectedShortfall.toLocaleString()}` : 'None'}
              </p>
            </div>
            <Calendar className="h-8 w-8 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">6-Month Cash Flow History</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Income" />
            <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
            <Line type="monotone" dataKey="net" stroke="#3b82f6" strokeWidth={3} name="Net Cash Flow" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Flow Forecast - Premium Feature */}
        <PaywallFeature
          title="Advanced Cash Flow Forecasting"
          description="Get AI-powered 6-month cash flow projections with confidence intervals"
          price="$25"
        >
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">6-Month Forecast</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="projected" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">High Confidence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Medium Confidence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">Low Confidence</span>
              </div>
            </div>
          </div>
        </PaywallFeature>

        {/* Financial Recommendations */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Financial Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Positive Cash Flow Trend</h4>
                  <p className="text-sm text-green-700">
                    Your cash flow has improved 15% over the last quarter. Consider investing in growth opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <DollarSign className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Optimize Payment Terms</h4>
                  <p className="text-sm text-blue-700">
                    Consider negotiating 30-day payment terms with customers to improve cash flow timing.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Seasonal Planning</h4>
                  <p className="text-sm text-yellow-700">
                    Prepare for seasonal fluctuations. Consider building cash reserves for slower months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Monthly Cash Flow Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
                <th>Expenses</th>
                <th>Net Cash Flow</th>
                <th>Growth %</th>
              </tr>
            </thead>
            <tbody>
              {cashFlowData.map((month, index) => {
                const growth = index > 0 
                  ? ((month.net - cashFlowData[index - 1].net) / cashFlowData[index - 1].net * 100).toFixed(1)
                  : 0
                return (
                  <tr key={month.month}>
                    <td className="font-medium">{month.month}</td>
                    <td className="text-green-600">${month.income.toLocaleString()}</td>
                    <td className="text-red-600">${month.expenses.toLocaleString()}</td>
                    <td className="font-medium">${month.net.toLocaleString()}</td>
                    <td>
                      <span className={`flex items-center ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {growth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span className="ml-1">{Math.abs(growth)}%</span>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CashFlow