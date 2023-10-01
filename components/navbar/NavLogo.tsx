import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
  return (
    <div className="text-2xl cursor-pointer">
      <Link href="/">
        <span className="text-primary">
          Hotash<span className="text-foreground">'</span>s
        </span>{' '}
        Journal
      </Link>
    </div>
  )
}

export default NavLogo
