import React, { useState } from 'react'
import { Plus, Search, Eye, Edit, Send, DollarSign } from 'lucide-react'

const Invoices = () => {
  const [invoices] = useState([
    {
      id: 'INV-001',
      customer: 'Acme Coffee Shop',
      amount: '$1,500.00',
      dueDate: '2024-01-20',
      status: 'paid',
      issueDate: '2024-01-05'
    },
    {
      id: 'INV-002',
      customer: 'Central Cafe',
      amount: '$800.00',
      dueDate: '2024-01-15',
      status: 'pending',
      issueDate: '2024-01-01'
    },
    {
      id: 'INV-003',
      customer: 'Downtown Deli',
      amount: '$1,200.00',
      dueDate: '2024-01-10',
      status: 'overdue',
      issueDate: '2023-12-26'
    },
    {
      id: 'INV-004',
      customer: 'Morning Brew',
      amount: '$650.00',
      dueDate: '2024-01-25',
      status: 'pending',
      issueDate: '2024-01-10'
    }
  ])

  const totalOutstanding = invoices
    .filter(inv => inv.status !== 'paid')
    .reduce((sum, inv) => sum + parseFloat(inv.amount.replace('$', '').replace(',', '')), 0)

  const overdueCount = invoices.filter(inv => inv.status === 'overdue').length

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'status-badge status-paid'
      case 'pending': return 'status-badge status-pending'
      case 'overdue': return 'status-badge status-overdue'
      default: return 'status-badge'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-600">Manage your billing and accounts receivable</p>
        </div>
        <button className="btn btn-primary flex items-center space-x-2">
          <Plus size={16} />
          <span>New Invoice</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Outstanding</p>
              <p className="text-2xl font-bold text-yellow-600">
                ${totalOutstanding.toLocaleString()}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue Invoices</p>
              <p className="text-2xl font-bold text-red-600">{overdueCount}</p>
            </div>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">!</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Invoices</p>
              <p className="text-2xl font-bold text-gray-900">{invoices.length}</p>
            </div>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">#</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn btn-primary p-4 text-left">
            <div className="font-medium">Send Payment Reminders</div>
            <div className="text-sm opacity-80">Automatically send reminders for overdue invoices</div>
          </button>
          <button className="btn btn-success p-4 text-left">
            <div className="font-medium">Generate Monthly Report</div>
            <div className="text-sm opacity-80">Create comprehensive billing report</div>
          </button>
          <button className="btn btn-secondary p-4 text-left">
            <div className="font-medium">Export to QuickBooks</div>
            <div className="text-sm opacity-80">Sync invoice data with accounting system</div>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search invoices..."
                className="input pl-10"
              />
            </div>
          </div>
          <select className="input md:w-48">
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
          <select className="input md:w-48">
            <option>All Customers</option>
            <option>Acme Coffee Shop</option>
            <option>Central Cafe</option>
            <option>Downtown Deli</option>
          </select>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="font-medium">{invoice.id}</td>
                <td>{invoice.customer}</td>
                <td className="font-medium">{invoice.amount}</td>
                <td>{invoice.issueDate}</td>
                <td>{invoice.dueDate}</td>
                <td>
                  <span className={getStatusColor(invoice.status)}>
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <button className="btn btn-secondary p-2" title="View">
                      <Eye size={14} />
                    </button>
                    <button className="btn btn-primary p-2" title="Edit">
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-success p-2" title="Send">
                      <Send size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Invoices