import React from 'react'
import { Package, ShoppingCart, FileText, DollarSign, Plus, Search } from 'lucide-react'

const EmptyState = ({ 
  icon: Icon = Package, 
  title, 
  description, 
  actionLabel, 
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  className = '' 
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center justify-center py-16">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="heading-4 mb-2">{title}</h3>
          <p className="text-base text-muted mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {actionLabel && onAction && (
              <button onClick={onAction} className="btn btn-primary">
                <Plus size={16} />
                {actionLabel}
              </button>
            )}
            {secondaryActionLabel && onSecondaryAction && (
              <button onClick={onSecondaryAction} className="btn btn-outline">
                <Search size={16} />
                {secondaryActionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const EmptyOrders = ({ onCreateOrder, onViewAll }) => (
  <EmptyState
    icon={ShoppingCart}
    title="No orders yet"
    description="Start by creating your first order to track your inventory and manage your supply chain."
    actionLabel="Create Order"
    onAction={onCreateOrder}
    secondaryActionLabel="View All Orders"
    onSecondaryAction={onViewAll}
  />
)

export const EmptyInventory = ({ onAddProduct, onImport }) => (
  <EmptyState
    icon={Package}
    title="No inventory items"
    description="Add your first product to start tracking inventory levels and managing stock."
    actionLabel="Add Product"
    onAction={onAddProduct}
    secondaryActionLabel="Import Products"
    onSecondaryAction={onImport}
  />
)

export const EmptyInvoices = ({ onCreateInvoice, onViewAll }) => (
  <EmptyState
    icon={FileText}
    title="No invoices found"
    description="Create your first invoice to start managing your accounts receivable and cash flow."
    actionLabel="Create Invoice"
    onAction={onCreateInvoice}
    secondaryActionLabel="View All Invoices"
    onSecondaryAction={onViewAll}
  />
)

export const EmptyCashFlow = ({ onAddTransaction, onConnect }) => (
  <EmptyState
    icon={DollarSign}
    title="No cash flow data"
    description="Connect your bank account or add transactions manually to start tracking your cash flow."
    actionLabel="Add Transaction"
    onAction={onAddTransaction}
    secondaryActionLabel="Connect Bank"
    onSecondaryAction={onConnect}
  />
)

export const SearchEmptyState = ({ searchTerm, onClearSearch }) => (
  <EmptyState
    icon={Search}
    title="No results found"
    description={`We couldn't find anything matching "${searchTerm}". Try adjusting your search terms.`}
    actionLabel="Clear Search"
    onAction={onClearSearch}
    className="py-8"
  />
)

export default EmptyState

