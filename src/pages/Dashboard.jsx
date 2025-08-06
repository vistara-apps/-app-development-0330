import React from 'react'
import { Package, ShoppingCart, FileText, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const Dashboard = () => {
  // Mock data for charts
  const salesData = [
    { month: 'Jan', revenue: 12000, orders: 45 },
    { month: 'Feb', revenue: 15000, orders: 52 },
    { month: 'Mar', revenue: 18000, orders: 61 },
    { month: 'Apr', revenue: 14000, orders: 48 },
    { month: 'May', revenue: 20000, orders: 67 },
    { month: 'Jun', revenue: 22000, orders: 73 },
  ]

  const inventoryData = [
    { product: 'Coffee Beans', stock: 120, reorder: 50 },
    { product: 'Sugar', stock: 30, reorder: 100 },
    { product: 'Milk Powder', stock: 85, reorder: 40 },
    { product: 'Packaging', stock: 200, reorder: 75 },
  ]

  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '$22,000',
      change: '+12%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Pending Orders',
      value: '8',
      change: '-2',
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      title: 'Low Stock Items',
      value: '3',
      change: '+1',
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      title: 'Unpaid Invoices',
      value: '5',
      change: '-1',
      icon: FileText,
      color: 'bg-yellow-500'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h1 className="heading-1 mb-2">Dashboard</h1>
        <p className="text-large text-muted">Overview of your business operations</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const isPositive = metric.change.startsWith('+')
          return (
            <div key={index} className="card group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-small text-muted mb-2">{metric.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <div className="flex items-center gap-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isPositive 
                        ? 'bg-success-100 text-success-600' 
                        : 'bg-danger-100 text-danger-600'
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-xs text-muted">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${metric.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="heading-4 mb-0">Revenue Trend</h3>
              <p className="text-small text-muted">Monthly performance overview</p>
            </div>
            <TrendingUp className="h-5 w-5 text-success-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="heading-4 mb-0">Inventory Status</h3>
              <p className="text-small text-muted">Current stock vs reorder points</p>
            </div>
            <Package className="h-5 w-5 text-primary-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="product" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="stock" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="reorder" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="heading-4 mb-0">Recent Activity</h3>
            <p className="text-small text-muted">Latest updates from your business</p>
          </div>
          <button className="btn btn-outline text-xs">View All</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-primary-50 rounded-xl border border-primary-100 hover:bg-primary-100 transition-colors cursor-pointer">
            <div className="p-2 bg-primary-600 rounded-lg">
              <ShoppingCart className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">New order from Acme Coffee Shop</p>
              <p className="text-small text-muted">Order #1234 - $1,500</p>
              <p className="text-xs text-muted mt-1">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-warning-50 rounded-xl border border-warning-100 hover:bg-warning-100 transition-colors cursor-pointer">
            <div className="p-2 bg-warning-600 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">Low stock alert: Sugar</p>
              <p className="text-small text-muted">Only 30 units remaining</p>
              <p className="text-xs text-muted mt-1">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-success-50 rounded-xl border border-success-100 hover:bg-success-100 transition-colors cursor-pointer">
            <div className="p-2 bg-success-600 rounded-lg">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">Invoice paid</p>
              <p className="text-small text-muted">Invoice #INV-567 - $800</p>
              <p className="text-xs text-muted mt-1">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
