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
            <li className="relative peer">
              <div>Category</div>
              <ul className="absolute -left-4 top-12 bg-background border rounded-lg w-32 peer-hover:block hidden ">
                {category.map((item) => (
                  <li
                    className="px-2 py-2 hover:bg-secondary cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
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
