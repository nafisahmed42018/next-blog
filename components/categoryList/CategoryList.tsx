'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@prisma/client'
import React from 'react'

interface CategoryListProps {
  categories: Category[]
}
const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="my-12 ">
      <h2 className="text-4xl font-bold my-12">Popular Categories</h2>
      <div className="flex flex-wrap justify-start gap-8">
        {categories.map((category: Category) => (
          <Link
            key={category.id}
            href={`/blog?cat=${category.slug}`}
            className="flex items-center gap-2 py-2 px-4 rounded-full justify-center bg-accent text-center text-foreground"
          >
            <div className="h-8 w-8 relative">
              <Image
                src={category.img || ''}
                alt={category.title}
                fill
                sizes="100%"
                className="rounded-full"
              />
            </div>
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
