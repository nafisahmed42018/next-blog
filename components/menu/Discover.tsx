'use client'
import Link from 'next/link'
import React from 'react'

const Discover = () => {
  const categories = [
    { id: 1, name: 'Galaxy', image: '/galaxy.jpg' },
    { id: 2, name: 'Nebula', image: '/nebula.jpg' },
    { id: 3, name: 'Satellite', image: '/satellite.jpg' },
    { id: 4, name: 'Telescope', image: '/telescope.jpg' },
  ]
  return (
    <div className="hidden xl:block">
      <h4 className="text-muted-foreground text-[18px] font-medium  ">{`Discover by topic`}</h4>
      <h2 className="text-[28px] font-medium">Categories</h2>
      <div className="flex flex-wrap gap-4 items-center mt-6">
        {categories.map((category) => (
          <Link
          key={category.id}
            href={`/blog?cat=${category.name.toLocaleLowerCase()}`}
            className="w-fit py-2 px-3 rounded-full bg-accent text-center text-foreground"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover
