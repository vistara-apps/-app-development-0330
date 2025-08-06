import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="card text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-danger-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-danger-600" />
                </div>
                <h1 className="heading-3 mb-2">Something went wrong</h1>
                <p className="text-base text-muted mb-6">
                  We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn-primary"
                  >
                    <RefreshCw size={16} />
                    Refresh Page
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="btn btn-outline"
                  >
                    <Home size={16} />
                    Go Home
                  </button>
                </div>
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-6 text-left">
                    <summary className="cursor-pointer text-sm text-muted hover:text-gray-700">
                      Error Details (Development)
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                      {this.state.error && this.state.error.toString()}
                      <br />
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export const ErrorMessage = ({ 
  title = 'Something went wrong', 
  message = 'Please try again later.', 
  onRetry,
  showRetry = true 
}) => {
  return (
    <div className="card">
      <div className="flex items-center justify-center py-12">
        <div className="text-center max-w-sm">
          <div className="w-12 h-12 bg-danger-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-6 h-6 text-danger-600" />
          </div>
          <h3 className="heading-5 mb-2">{title}</h3>
          <p className="text-small text-muted mb-4">{message}</p>
          {showRetry && onRetry && (
            <button onClick={onRetry} className="btn btn-primary">
              <RefreshCw size={16} />
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary

