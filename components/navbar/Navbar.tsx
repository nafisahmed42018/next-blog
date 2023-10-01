'use client'

import Container from '../Container'
import { ToggleMode } from '../ToggleMode'
import NavLogo from './NavLogo'

const Navbar = () => {
  const category = [
    {
      id: 1,
      name: 'Category 1',
      subCategory: [
        {
          id: 1,
          name: 'subcategory1-1',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
        {
          id: 2,
          name: 'subcategory1-2',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
        {
          id: 3,
          name: 'subcategory1-3',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Category 2',
      subCategory: [
        {
          id: 1,
          name: 'subcategory2-1',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
        {
          id: 2,
          name: 'subcategory2-2',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
          ],
        },
        {
          id: 3,
          name: 'subcategory2-3',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Category 3',
      subCategory: [
        {
          id: 1,
          name: 'subcategory3-1',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
        {
          id: 2,
          name: 'subcategory3-2',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
        {
          id: 3,
          name: 'subcategory3-3',
          links: [
            { id: 1, name: 'link1' },
            { id: 2, name: 'link2' },
            { id: 3, name: 'link3' },
          ],
        },
      ],
    },
  ]
  const user = null
  return (
    <header className="fixed z-[1000] w-full top-0 left-0 py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <NavLogo />
          <ul className="m-0 p-0 list-none relative ">
            {category.map((category) => (
              <li className="inline-block hover:bg-[#444] group">
                <a className="block px-7 py-3" href="/">
                  {category.name}
                </a>
                <div className="absolute w-full hidden group-hover:grid group-hover:grid-cols-2 group-hover:gap-4 bg-black text-white px-7 py-4">
                  {category.subCategory.map((item) => (
                    <div className="">
                      <h3 className="mb-4">{item.name}</h3>
                      <ul>
                        {item.links.map((link) => (
                          <li className="block hover:bg-[#444]">
                            <a className="block p-0" href="/">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
