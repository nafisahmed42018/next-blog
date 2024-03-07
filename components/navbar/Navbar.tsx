'use client'

import Container from '../Container'
import NavLogo from './NavLogo'
import { useEffect, useRef, useState } from 'react'
import NavOptions from './NavOptions'

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const header = headerRef.current
    let lastScroll = 0
    if (!header) return

    const handleNav = () => {
      const currentScroll = window.scrollY
      if (currentScroll <= 0) {
        header.classList.remove('border-b-2', 'shadow')
      } else {
        header.classList.add('border-b-2', 'shadow')
      }

      lastScroll = currentScroll
    }
    window.addEventListener('scroll', handleNav)
    return () => {
      window.removeEventListener('scroll', handleNav)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed z-[1000] bg-background w-full top-0 left-0 py-6 transition-all duration-300`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <NavLogo />
          <NavOptions />
          <div className="flex flex-col gap-1.5 cursor-pointer md:hidden transition-all">
            <div className="w-6 h-0.5 bg-foreground md:block"></div>
            <div className="w-6 h-0.5 bg-foreground md:block"></div>
            <div className="w-6 h-0.5 bg-foreground md:block"></div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
