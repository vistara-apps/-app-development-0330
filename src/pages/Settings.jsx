import React, { useState } from 'react'
import { Save, Building2, Users, CreditCard, Bell, Shield, Database } from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('business')

  const tabs = [
    { id: 'business', name: 'Business Info', icon: Building2 },
    { id: 'suppliers', name: 'Suppliers', icon: Users },
    { id: 'integrations', name: 'Integrations', icon: Database },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'security', name: 'Security', icon: Shield },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'business':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input type="text" className="input" defaultValue="Your Food & Beverage Co." />
              </div>
              <div className="form-group">
                <label className="form-label">Industry</label>
                <select className="input">
                  <option>Food & Beverage Manufacturing</option>
                  <option>Coffee Roasting</option>
                  <option>Bakery</option>
                  <option>Brewery</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Address</label>
                <input type="text" className="input" defaultValue="123 Business St" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="input" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="input" defaultValue="contact@yourcompany.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Tax ID</label>
                <input type="text" className="input" defaultValue="12-3456789" />
              </div>
            </div>
          </div>
        )

      case 'suppliers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Supplier Management</h3>
              <button className="btn btn-primary">Add Supplier</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Bean Supply Co.', contact: 'orders@beansupply.com', status: 'Active' },
                { name: 'Dairy Fresh', contact: 'sales@dairyfresh.com', status: 'Active' },
                { name: 'Package Pro', contact: 'orders@packagepro.com', status: 'Active' },
              ].map((supplier, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{supplier.name}</h4>
                    <p className="text-sm text-gray-600">{supplier.contact}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="status-badge status-paid">{supplier.status}</span>
                    <button className="btn btn-secondary btn-sm">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'integrations':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Third-Party Integrations</h3>
            <div className="grid gap-6">
              <div className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">QB</span>
                    </div>
                    <div>
                      <h4 className="font-medium">QuickBooks Online</h4>
                      <p className="text-sm text-gray-600">Sync accounting data automatically</p>
                    </div>
                  </div>
                  <button className="btn btn-success">Connected</button>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Stripe</h4>
                      <p className="text-sm text-gray-600">Process payments and manage invoicing</p>
                    </div>
                  </div>
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">G</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Google Maps</h4>
                      <p className="text-sm text-gray-600">Delivery estimates and routing</p>
                    </div>
                  </div>
                  <button className="btn btn-success">Connected</button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { title: 'Low Stock Alerts', description: 'Get notified when inventory is below reorder point' },
                { title: 'Order Updates', description: 'Receive updates on order status changes' },
                { title: 'Invoice Reminders', description: 'Automatic reminders for overdue invoices' },
                { title: 'Cash Flow Alerts', description: 'Notifications about cash flow projections' },
                { title: 'Weekly Reports', description: 'Summary reports sent every Monday' },
              ].map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{notification.title}</h4>
                    <p className="text-sm text-gray-600">{notification.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )

      case 'billing':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Subscription & Billing</h3>
            <div className="card bg-blue-50 border-blue-200">
              <h4 className="font-medium text-blue-800">Current Plan: Professional</h4>
              <p className="text-blue-700">$99/month - Unlimited orders, advanced analytics</p>
              <div className="mt-4 flex space-x-2">
                <button className="btn btn-primary">Upgrade Plan</button>
                <button className="btn btn-secondary">Change Payment Method</button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Billing History</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan 1, 2024</td>
                    <td>Professional Plan</td>
                    <td>$99.00</td>
                    <td><span className="status-badge status-paid">Paid</span></td>
                  </tr>
                  <tr>
                    <td>Dec 1, 2023</td>
                    <td>Professional Plan</td>
                    <td>$99.00</td>
                    <td><span className="status-badge status-paid">Paid</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <div className="space-y-4">
              <div className="card">
                <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                <button className="btn btn-primary">Enable 2FA</button>
              </div>
              <div className="card">
                <h4 className="font-medium mb-2">API Keys</h4>
                <p className="text-sm text-gray-600 mb-4">Manage API access for integrations</p>
                <button className="btn btn-secondary">Manage API Keys</button>
              </div>
              <div className="card">
                <h4 className="font-medium mb-2">Data Export</h4>
                <p className="text-sm text-gray-600 mb-4">Download your data for backup or migration</p>
                <button className="btn btn-secondary">Export Data</button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:w-3/4">
          <div className="card">
            {renderTabContent()}
            <div className="mt-6 pt-6 border-t">
              <button className="btn btn-primary flex items-center space-x-2">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings