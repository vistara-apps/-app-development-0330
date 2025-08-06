import { useEffect, useRef } from 'react'

// Hook for managing focus
export const useFocusManagement = () => {
  const focusRef = useRef(null)

  const focusElement = (element) => {
    if (element && element.focus) {
      element.focus()
    }
  }

  const focusFirst = (container) => {
    if (!container) return
    
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }

  const focusLast = (container) => {
    if (!container) return
    
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus()
    }
  }

  return {
    focusRef,
    focusElement,
    focusFirst,
    focusLast
  }
}

// Hook for keyboard navigation
export const useKeyboardNavigation = (onEscape, onEnter) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Escape':
          if (onEscape) {
            event.preventDefault()
            onEscape()
          }
          break
        case 'Enter':
          if (onEnter && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'A') {
            event.preventDefault()
            onEnter()
          }
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onEscape, onEnter])
}

// Hook for trap focus within a container
export const useFocusTrap = (isActive) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (event) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Focus the first element when trap becomes active
    firstElement.focus()

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isActive])

  return containerRef
}

// Hook for announcing content to screen readers
export const useAnnouncement = () => {
  const announce = (message, priority = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.setAttribute('class', 'sr-only')
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  return { announce }
}

// Hook for managing ARIA attributes
export const useAriaAttributes = (initialAttributes = {}) => {
  const ref = useRef(null)

  const setAriaAttribute = (attribute, value) => {
    if (ref.current) {
      if (value === null || value === undefined) {
        ref.current.removeAttribute(`aria-${attribute}`)
      } else {
        ref.current.setAttribute(`aria-${attribute}`, value)
      }
    }
  }

  const setAriaAttributes = (attributes) => {
    Object.entries(attributes).forEach(([key, value]) => {
      setAriaAttribute(key, value)
    })
  }

  useEffect(() => {
    if (Object.keys(initialAttributes).length > 0) {
      setAriaAttributes(initialAttributes)
    }
  }, [])

  return {
    ref,
    setAriaAttribute,
    setAriaAttributes
  }
}

// Hook for detecting reduced motion preference
export const useReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion
}

// Hook for managing skip links
export const useSkipLinks = () => {
  useEffect(() => {
    const skipLinks = document.querySelectorAll('.skip-link')
    
    skipLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const target = document.getElementById(targetId)
        
        if (target) {
          target.focus()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])
}

