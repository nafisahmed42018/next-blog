'use client'
import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
  return (
    <div className="text-2xl cursor-pointer">
      <Link href="/">
        Astrog
        <span className="text-primary">
          raffi
        </span>{' '}
      </Link>
    </div>
  )
}

export default NavLogo
