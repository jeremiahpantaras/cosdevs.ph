import React from 'react'
import { BRAND } from '../../config/brand'

export default function Header() {
  return (
    <header className="w-full bg-brandBlue-dark py-6 px-8 flex items-center justify-between shadow">
      <div className="text-2xl text-white tracking-wide">
        {BRAND.name}
      </div>
      <div className="text-brandBlue-medium text-lg">
        {BRAND.tagline}
      </div>
      {/* Add quick actions or user profile here if needed */}
    </header>
  )
}