import { BRAND } from '../../config/brand'

// Master horizontal lockup viewBox is 507.79 x 126.79.
const RATIO = 507.79 / 126.79

/**
 * Official horizontal lockup, rendered from the master SVG via <img>.
 * (The masters all define the same gradient id, so they must not be inlined.)
 * variant: 'full-color' for White/Cloud/Mist, 'reversed' for Elpis/Deep Navy.
 * Minimum digital width is 120px, so keep height >= 30.
 */
export default function Logo({ variant = 'full-color', height = 32, className = '' }) {
  const src = variant === 'reversed' ? BRAND.assets.logoReversed : BRAND.assets.logoFullColor
  return (
    <img
      src={src}
      alt={BRAND.name}
      width={Math.round(height * RATIO)}
      height={height}
      className={className}
      style={{ height, width: 'auto' }}
      decoding="async"
    />
  )
}
