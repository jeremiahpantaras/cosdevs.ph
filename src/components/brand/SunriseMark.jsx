import { useId } from 'react'

/**
 * Sun-over-horizon supergraphic, drawn from the master symbol paths (Brand Guidelines p6–7, p23).
 * Geometry is verbatim from elpisoft_symbol_full-color.svg; never alter, rotate or add effects.
 * The sun and bowl are separate groups so entrances can move them as whole pieces.
 *
 * part: 'full' renders sun + bowl; 'sun' renders only the sun, cropped at the horizon.
 * bowl: 'navy' on light surfaces; 'tonal' (white at low opacity) on navy surfaces, as on p1 and p25.
 * The sun is clipped at the horizon line, so translating [data-sun] upward makes it rise from behind it.
 */
export default function SunriseMark({ part = 'full', bowl = 'navy', className = '', ...rest }) {
  const uid = useId().replace(/:/g, '')
  const gradId = `dawn-${uid}`
  const clipId = `horizon-${uid}`
  const viewBox = part === 'sun' ? '15 9 90 46' : '14.59 8.59 90.82 96.82'

  return (
    <svg
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      data-mark
      {...rest}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FF6B4A" />
          <stop offset="1" stopColor="#FFB020" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="120" height="54" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <g data-sun>
          <path d="M16 54 A44 44 0 0 1 104 54 Z" fill={`url(#${gradId})`} />
        </g>
      </g>
      {part === 'full' && (
        <g data-bowl>
          <path
            d="M16.17 63.83 A44 44 0 0 0 94.67 87.09 A7 7 0 0 0 83.64 78.47 A30 30 0 0 1 30.11 62.61 Z"
            fill={bowl === 'tonal' ? '#FFFFFF' : '#0E1B3D'}
            fillOpacity={bowl === 'tonal' ? 0.08 : 1}
          />
        </g>
      )}
    </svg>
  )
}
