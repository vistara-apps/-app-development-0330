# Opti-Mize Design System

## Overview

The Opti-Mize design system provides a comprehensive set of design tokens, components, and guidelines to ensure consistency and accessibility across the application.

## Design Tokens

### Colors

Our color system is built around semantic color tokens that provide meaning and context:

#### Primary Colors
- `--color-primary-50` to `--color-primary-900`: Main brand colors (blue)
- Used for: Primary actions, links, active states

#### Gray Scale
- `--color-gray-50` to `--color-gray-900`: Neutral colors
- Used for: Text, backgrounds, borders

#### Semantic Colors
- **Success**: `--color-success-*` (green) - Success states, positive actions
- **Warning**: `--color-warning-*` (yellow) - Warnings, pending states
- **Danger**: `--color-danger-*` (red) - Errors, destructive actions

### Typography

#### Font Families
- `--font-family-sans`: System font stack for UI text
- `--font-family-mono`: Monospace font for code

#### Font Sizes
- `--font-size-xs` (12px) to `--font-size-5xl` (48px)
- Responsive scaling on mobile devices

#### Font Weights
- `--font-weight-normal` (400)
- `--font-weight-medium` (500)
- `--font-weight-semibold` (600)
- `--font-weight-bold` (700)

#### Typography Classes
- `.heading-1` to `.heading-5`: Semantic heading styles
- `.text-large`, `.text-base`, `.text-small`, `.text-xs`: Body text sizes
- `.text-primary`, `.text-success`, `.text-warning`, `.text-danger`: Semantic colors

### Spacing

Consistent spacing scale using rem units:
- `--space-1` (4px) to `--space-20` (80px)
- Used for: Padding, margins, gaps

### Border Radius
- `--radius-sm` (4px) to `--radius-2xl` (24px)
- `--radius-full` (9999px) for circular elements

### Shadows
- `--shadow-sm` to `--shadow-2xl`: Elevation system
- Used for: Cards, modals, dropdowns

## Components

### Buttons

#### Classes
- `.btn`: Base button styles
- `.btn-primary`: Primary action button
- `.btn-secondary`: Secondary action button
- `.btn-success`: Success/confirmation button
- `.btn-danger`: Destructive action button
- `.btn-outline`: Outlined button variant

#### Features
- Hover and focus states
- Disabled state support
- Loading state support
- Accessibility compliant

### Cards

#### Classes
- `.card`: Base card component

#### Features
- Hover effects with subtle animation
- Consistent padding and spacing
- Shadow elevation
- Border styling

### Forms

#### Classes
- `.input`: Text input styling
- `.form-group`: Form field container
- `.form-label`: Form label styling

#### Features
- Focus states with color and shadow
- Hover states
- Error state support
- Placeholder styling

### Tables

#### Classes
- `.table`: Base table styling

#### Features
- Hover effects on rows
- Consistent padding
- Header styling
- Responsive design

### Status Badges

#### Classes
- `.status-badge`: Base badge styling
- `.status-pending`, `.status-paid`, `.status-overdue`, etc.: Semantic variants

## Layout System

### Grid System
- `.grid`: CSS Grid container
- `.grid-2`, `.grid-3`, `.grid-4`: Column variants
- Responsive breakpoints

### Container
- `.container`: Max-width container with responsive padding

## Accessibility

### Focus Management
- Visible focus indicators on all interactive elements
- Focus trap utilities for modals
- Skip links for keyboard navigation

### Color Contrast
- WCAG AA compliant color combinations
- High contrast mode support

### Screen Reader Support
- `.sr-only`: Screen reader only content
- Proper ARIA attributes
- Semantic HTML structure

### Reduced Motion
- Respects `prefers-reduced-motion` setting
- Fallbacks for animations

## Usage Guidelines

### Do's
- Use semantic color tokens instead of hardcoded values
- Follow the spacing scale for consistent layouts
- Use typography classes for consistent text styling
- Implement proper focus states for accessibility

### Don'ts
- Don't use arbitrary color values
- Don't skip heading levels in typography hierarchy
- Don't forget to test with keyboard navigation
- Don't ignore loading and error states

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance

- CSS custom properties for efficient theming
- Minimal CSS bundle size
- Optimized animations and transitions
- Lazy loading for non-critical styles

## Development

### File Structure
```
src/styles/
├── design-tokens.css    # Color, spacing, typography tokens
├── typography.css       # Typography system
├── loading-states.css   # Loading animations
└── accessibility.css    # Accessibility styles
```

### Adding New Components
1. Define component styles using design tokens
2. Include hover, focus, and disabled states
3. Add accessibility attributes
4. Test with keyboard navigation
5. Document usage examples

### Customization
- Modify design tokens in `design-tokens.css`
- Changes propagate throughout the system
- Test thoroughly after token changes

## Examples

### Button Usage
```jsx
<button className="btn btn-primary">
  Primary Action
</button>

<button className="btn btn-outline">
  Secondary Action
</button>
```

### Card Usage
```jsx
<div className="card">
  <h3 className="heading-4">Card Title</h3>
  <p className="text-base text-muted">Card content</p>
</div>
```

### Form Usage
```jsx
<div className="form-group">
  <label className="form-label" htmlFor="email">
    Email Address
  </label>
  <input 
    type="email" 
    id="email" 
    className="input" 
    placeholder="Enter your email"
  />
</div>
```

## Future Enhancements

- Dark mode support
- Additional component variants
- Animation library integration
- Design token documentation tool
- Automated accessibility testing

