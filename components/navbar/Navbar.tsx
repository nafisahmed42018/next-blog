'use client'

import Container from '../Container'
import { ToggleMode } from '../ToggleMode'
import NavLogo from './NavLogo'

const Navbar = () => {
  const category = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
  ]
  const user = null
  return (
    <header className="fixed z-[1000] w-full top-0 left-0 py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <NavLogo />
          <ul className="flex gap-8 items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <div className="relative group">
                <div className="py-4">Category</div>
                <ul className="absolute -left-8 bg-background w-[200%] hidden group-hover:block border-2 rounded-lg shadow-lg">
                  {category.map((item) => (
                    <li className="px-4 py-2 text-center hover:first:rounded-t-lg hover:last:rounded-b-lg hover:bg-primary cursor-pointer">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <ToggleMode />
            </li>
            {user && <li>Login</li>}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
