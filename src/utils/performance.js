// Performance utilities for the Opti-Mize application

// Lazy loading utility for components
export const lazyLoad = (importFunc, fallback = null) => {
  const LazyComponent = React.lazy(importFunc)
  
  return (props) => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  )
}

// Debounce utility for search and input handling
export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}

// Throttle utility for scroll and resize events
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Intersection Observer utility for lazy loading images and content
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    return {
      observe: () => {},
      unobserve: () => {},
      disconnect: () => {}
    }
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Performance monitoring utilities
export const performanceMonitor = {
  // Mark the start of a performance measurement
  mark: (name) => {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(`${name}-start`)
    }
  },

  // Mark the end and measure performance
  measure: (name) => {
    if ('performance' in window && 'mark' in performance && 'measure' in performance) {
      performance.mark(`${name}-end`)
      performance.measure(name, `${name}-start`, `${name}-end`)
      
      const measure = performance.getEntriesByName(name)[0]
      return measure ? measure.duration : 0
    }
    return 0
  },

  // Get all performance measurements
  getAll: () => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      return performance.getEntriesByType('measure')
    }
    return []
  },

  // Clear all performance measurements
  clear: () => {
    if ('performance' in window && 'clearMeasures' in performance) {
      performance.clearMeasures()
      performance.clearMarks()
    }
  }
}

// Memory usage monitoring (for development)
export const memoryMonitor = {
  getUsage: () => {
    if ('performance' in window && 'memory' in performance) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) // MB
      }
    }
    return null
  },

  log: () => {
    const usage = memoryMonitor.getUsage()
    if (usage) {
      console.log(`Memory Usage: ${usage.used}MB / ${usage.total}MB (Limit: ${usage.limit}MB)`)
    }
  }
}

// Bundle size analyzer (for development)
export const bundleAnalyzer = {
  // Analyze which components are being loaded
  logComponentLoad: (componentName) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Component loaded: ${componentName}`)
    }
  },

  // Track route changes for code splitting analysis
  logRouteChange: (route) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Route changed: ${route}`)
      memoryMonitor.log()
    }
  }
}

// Image optimization utilities
export const imageUtils = {
  // Create optimized image URLs (placeholder for CDN integration)
  getOptimizedUrl: (url, width, height, quality = 80) => {
    // This would integrate with a CDN service like Cloudinary or ImageKit
    // For now, return the original URL
    return url
  },

  // Lazy load images with intersection observer
  lazyLoadImage: (img, src, placeholder = '') => {
    const observer = createIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target
          image.src = src
          image.classList.remove('lazy')
          observer.unobserve(image)
        }
      })
    })

    img.src = placeholder
    img.classList.add('lazy')
    observer.observe(img)
  }
}

// Network status monitoring
export const networkMonitor = {
  // Check if user is online
  isOnline: () => navigator.onLine,

  // Get connection information
  getConnectionInfo: () => {
    if ('connection' in navigator) {
      return {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      }
    }
    return null
  },

  // Check if user prefers reduced data usage
  shouldReduceData: () => {
    const connection = networkMonitor.getConnectionInfo()
    return connection && (connection.saveData || connection.effectiveType === 'slow-2g')
  }
}

// Cache utilities for API responses
export const cacheUtils = {
  // Simple in-memory cache
  cache: new Map(),

  // Set cache with TTL
  set: (key, value, ttl = 300000) => { // 5 minutes default
    const expiry = Date.now() + ttl
    cacheUtils.cache.set(key, { value, expiry })
  },

  // Get from cache
  get: (key) => {
    const item = cacheUtils.cache.get(key)
    if (!item) return null

    if (Date.now() > item.expiry) {
      cacheUtils.cache.delete(key)
      return null
    }

    return item.value
  },

  // Clear cache
  clear: () => {
    cacheUtils.cache.clear()
  },

  // Get cache size
  size: () => cacheUtils.cache.size
}

// Error tracking utilities
export const errorTracker = {
  // Track JavaScript errors
  trackError: (error, context = {}) => {
    if (process.env.NODE_ENV === 'production') {
      // In production, send to error tracking service
      console.error('Error tracked:', error, context)
    } else {
      console.error('Development error:', error, context)
    }
  },

  // Track performance issues
  trackPerformance: (metric, value, context = {}) => {
    if (value > 1000) { // Log slow operations (>1s)
      console.warn(`Slow operation detected: ${metric} took ${value}ms`, context)
    }
  }
}

export default {
  lazyLoad,
  debounce,
  throttle,
  createIntersectionObserver,
  performanceMonitor,
  memoryMonitor,
  bundleAnalyzer,
  imageUtils,
  networkMonitor,
  cacheUtils,
  errorTracker
}

