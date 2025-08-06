import React, { useState } from 'react'
import { Lock } from 'lucide-react'
import { usePaymentContext } from '../hooks/usePaymentContext'

const PaywallFeature = ({ children, title, description, price }) => {
  const [isPaid, setIsPaid] = useState(false)
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false)
  const { createSession } = usePaymentContext()

  const handlePayment = async () => {
    setIsPaymentInProgress(true)
    try {
      await createSession()
      setIsPaid(true)
    } catch (error) {
      console.error('Payment failed:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsPaymentInProgress(false)
    }
  }

  if (isPaid) {
    return children
  }

  return (
    <div className="relative">
      <div className="filter blur-sm pointer-events-none">
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
        <div className="text-center p-6 max-w-md">
          <Lock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold text-blue-600">{price}</span>
            <span className="text-gray-500"> one-time payment</span>
          </div>
          <button
            onClick={handlePayment}
            disabled={isPaymentInProgress}
            className="btn btn-primary w-full"
          >
            {isPaymentInProgress ? 'Processing...' : 'Unlock Feature'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaywallFeature