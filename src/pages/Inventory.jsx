import React, { useState } from 'react'
import { Search, AlertTriangle, Plus, Edit, TrendingDown, TrendingUp } from 'lucide-react'

const Inventory = () => {
  const [inventory] = useState([
    {
      id: 1,
      name: 'Coffee Beans (Premium)',
      category: 'Raw Materials',
      currentStock: 120,
      reorderPoint: 50,
      unitCost: '$12.00',
      totalValue: '$1,440.00',
      supplier: 'Bean Supply Co.',
      lastOrdered: '2024-01-05',
      status: 'normal'
    },
    {
      id: 2,
      name: 'Sugar (Organic)',
      category: 'Raw Materials',
      currentStock: 30,
      reorderPoint: 100,
      unitCost: '$3.50',
      totalValue: '$105.00',
      supplier: 'Sweet Supplies',
      lastOrdered: '2023-12-20',
      status: 'low'
    },
    {
      id: 3,
      name: 'Milk Powder',
      category: 'Raw Materials',
      currentStock: 85,
      reorderPoint: 40,
      unitCost: '$8.00',
      totalValue: '$680.00',
      supplier: 'Dairy Fresh',
      lastOrdered: '2024-01-08',
      status: 'normal'
    },
    {
      id: 4,
      name: 'Disposable Cups (16oz)',
      category: 'Packaging',
      currentStock: 2500,
      reorderPoint: 1000,
      unitCost: '$0.15',
      totalValue: '$375.00',
      supplier: 'Package Pro',
      lastOrdered: '2024-01-10',
      status: 'normal'
    },
    {
      id: 5,
      name: 'Coffee Filters',
      category: 'Supplies',
      currentStock: 45,
      reorderPoint: 100,
      unitCost: '$0.25',
      totalValue: '$11.25',
      supplier: 'Bean Supply Co.',
      lastOrdered: '2023-12-15',
      status: 'low'
    }
  ])

  const totalInventoryValue = inventory.reduce((sum, item) => {
    return sum + parseFloat(item.totalValue.replace('$', '').replace(',', ''))
  }, 0)

  const lowStockItems = inventory.filter(item => item.status === 'low').length

  const getStatusIcon = (status) => {
    return status === 'low' ? (
      <AlertTriangle className="h-4 w-4 text-red-500" />
    ) : (
      <TrendingUp className="h-4 w-4 text-green-500" />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Track and manage your stock levels</p>
        </div>
        <button className="btn btn-primary flex items-center space-x-2">
          <Plus size={16} />
          <span>Add Item</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Inventory Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ${totalInventoryValue.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
              <p className="text-2xl font-bold text-red-600">{lowStockItems}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {lowStockItems > 0 && (
        <div className="card bg-red-50 border-red-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800">Low Stock Alert</h3>
              <p className="text-red-700">
                {lowStockItems} item(s) are below reorder point and need immediate attention.
              </p>
              <button className="btn btn-danger mt-2">Generate Reorder Report</button>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search inventory..."
                className="input pl-10"
              />
            </div>
          </div>
          <select className="input md:w-48">
            <option>All Categories</option>
            <option>Raw Materials</option>
            <option>Packaging</option>
            <option>Supplies</option>
          </select>
          <select className="input md:w-48">
            <option>All Status</option>
            <option>Normal</option>
            <option>Low Stock</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>Reorder Point</th>
              <th>Unit Cost</th>
              <th>Total Value</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="font-medium">{item.name}</div>
                </td>
                <td>{item.category}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <span className={item.status === 'low' ? 'text-red-600 font-medium' : ''}>
                      {item.currentStock}
                    </span>
                    {getStatusIcon(item.status)}
                  </div>
                </td>
                <td>{item.reorderPoint}</td>
                <td>{item.unitCost}</td>
                <td className="font-medium">{item.totalValue}</td>
                <td>{item.supplier}</td>
                <td>
                  <span className={`status-badge ${item.status === 'low' ? 'status-low' : 'status-normal'}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <button className="btn btn-primary p-2" title="Edit">
                      <Edit size={14} />
                    </button>
                    {item.status === 'low' && (
                      <button className="btn btn-danger p-2" title="Reorder">
                        <Plus size={14} />
                      </button>
                    )}
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

export default Inventory