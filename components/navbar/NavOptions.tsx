'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { PenBoxIcon, LogOutIcon, LogInIcon } from 'lucide-react'
import { ToggleTheme } from '../ToggleTheme'
import { useRouter } from 'next/navigation'

const NavOptions = () => {
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
  const { data, status } = useSession()


  return (
    <ul className="hidden md:flex gap-6 lg:gap-8 md:items-center">
      <li className="hover:text-primary cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li>
        <div className="relative group">
          <div className="py-4  cursor-pointer hover:text-primary ">
            Category
          </div>
          <ul className="absolute transition-all -left-8 bg-background w-[200%] hidden group-hover:block border rounded-lg shadow-lg  ">
            {category.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 text-center hover:first:rounded-t-lg hover:last:rounded-b-lg hover:bg-primary  cursor-pointer"
              >
                <Link href={`/${item.name}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li>
        <Link
          href={`${data?.user ? '/write' : '/login'}`}
          className="py-4 flex items-center gap-2 hover:text-primary cursor-pointer"
        >
          <PenBoxIcon className="screen-856:block hidden" />
          Write
        </Link>
      </li>
      {status !== 'authenticated' ? (
        <li className="hover:text-primary cursor-pointer">
          <Link className="flex items-center gap-1" href="/login">
            <LogInIcon className="screen-856:block hidden" />
            Login
          </Link>
        </li>
      ) : (
        <>
          <li className="hover:text-primary cursor-pointer">
            <Link
              className="flex items-center gap-1"
              href="/"
              onClick={() => signOut()}
            >
              <LogOutIcon className="screen-856:block hidden" />
              Logout
            </Link>
          </li>
        </>
      )}
      <li>
        <ToggleTheme />
      </li>
    </ul>
  )
}

export default NavOptions
