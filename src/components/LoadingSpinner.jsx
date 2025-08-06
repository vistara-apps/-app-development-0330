import React from 'react'

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${className}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export const LoadingCard = ({ title = 'Loading...', description }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <LoadingSpinner size="lg" className="text-primary-600 mb-4" />
          <h3 className="heading-5 mb-2">{title}</h3>
          {description && <p className="text-small text-muted">{description}</p>}
        </div>
      </div>
    </div>
  )
}

export const LoadingSkeleton = ({ className = '', rows = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

export const TableLoadingSkeleton = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="animate-pulse">
      <div className="table w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default LoadingSpinner

