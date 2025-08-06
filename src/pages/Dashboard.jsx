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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your business operations</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-full ${metric.color}`}>
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
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Inventory Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#10b981" />
              <Bar dataKey="reorder" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <ShoppingCart className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium">New order from Acme Coffee Shop</p>
              <p className="text-sm text-gray-600">Order #1234 - $1,500</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="font-medium">Low stock alert: Sugar</p>
              <p className="text-sm text-gray-600">Only 30 units remaining</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <FileText className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium">Invoice paid</p>
              <p className="text-sm text-gray-600">Invoice #INV-567 - $800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard