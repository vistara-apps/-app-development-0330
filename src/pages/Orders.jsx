import React, { useState } from 'react'
import { Plus, Search, Filter, Eye, Edit, Truck } from 'lucide-react'
import AIOrderGenerator from '../components/AIOrderGenerator'

const Orders = () => {
  const [showNewOrder, setShowNewOrder] = useState(false)
  const [orders] = useState([
    {
      id: 'ORD-001',
      supplier: 'Bean Supply Co.',
      items: ['Coffee Beans (50kg)', 'Filters (1000pc)'],
      total: '$1,200',
      status: 'pending',
      deliveryDate: '2024-01-15',
      createdAt: '2024-01-10'
    },
    {
      id: 'ORD-002',
      supplier: 'Dairy Fresh',
      items: ['Milk Powder (25kg)', 'Cream (10L)'],
      total: '$800',
      status: 'shipped',
      deliveryDate: '2024-01-12',
      createdAt: '2024-01-08'
    },
    {
      id: 'ORD-003',
      supplier: 'Package Pro',
      items: ['Cups (5000pc)', 'Lids (5000pc)', 'Sleeves (2000pc)'],
      total: '$450',
      status: 'delivered',
      deliveryDate: '2024-01-10',
      createdAt: '2024-01-05'
    }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'status-badge status-pending'
      case 'shipped': return 'status-badge bg-blue-100 text-blue-800'
      case 'delivered': return 'status-badge status-paid'
      default: return 'status-badge'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600">Manage your supplier orders and inventory</p>
        </div>
        <button
          onClick={() => setShowNewOrder(true)}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>New Order</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search orders..."
                className="input pl-10"
              />
            </div>
          </div>
          <select className="input md:w-48">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
          <select className="input md:w-48">
            <option>All Suppliers</option>
            <option>Bean Supply Co.</option>
            <option>Dairy Fresh</option>
            <option>Package Pro</option>
          </select>
        </div>
      </div>

      {/* AI-Generated Orders Section */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">AI-Recommended Orders</h3>
        <p className="text-gray-600 mb-4">
          Based on your sales patterns and current inventory levels, here are recommended orders:
        </p>
        <AIOrderGenerator />
      </div>

      {/* Orders Table */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Supplier</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Delivery Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="font-medium">{order.id}</td>
                <td>{order.supplier}</td>
                <td>
                  <div className="text-sm">
                    {order.items.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </td>
                <td className="font-medium">{order.total}</td>
                <td>
                  <span className={getStatusColor(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td>{order.deliveryDate}</td>
                <td>
                  <div className="flex space-x-2">
                    <button className="btn btn-secondary p-2" title="View">
                      <Eye size={14} />
                    </button>
                    <button className="btn btn-primary p-2" title="Edit">
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-success p-2" title="Track">
                      <Truck size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Order Modal */}
      {showNewOrder && (
        <div className="paywall-overlay">
          <div className="paywall-modal max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Create New Order</h2>
            <form className="space-y-4">
              <div className="form-group">
                <label className="form-label">Supplier</label>
                <select className="input">
                  <option>Select Supplier</option>
                  <option>Bean Supply Co.</option>
                  <option>Dairy Fresh</option>
                  <option>Package Pro</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Delivery Date</label>
                <input type="date" className="input" />
              </div>
              <div className="form-group">
                <label className="form-label">Items</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Product name" className="input flex-1" />
                    <input type="number" placeholder="Quantity" className="input w-24" />
                    <button type="button" className="btn btn-success">Add</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowNewOrder(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders