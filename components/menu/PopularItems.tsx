'use client'
import Link from 'next/link'
import React from 'react'

const PopularItems = () => {
  const items = [1, 2, 3, 4]

  return (
    <div>
      <h4 className="text-muted-foreground text-[18px] font-medium  ">{`What's hot`}</h4>
      <h2 className="text-[28px] font-medium">Most Popular</h2>
      <div className=" flex flex-col gap-8 mt-6">
        {items.map((item) => (
          <Link key={item} href="/" className="flex items-center gap-4">
            <div className=" flex-[4] flex flex-col gap-1">
              <span className="text-[12px] px-2 py-1 bg-accent rounded-xl w-fit">
                Galaxy
              </span>
              <h3 className=" line-clamp-2 leading-5 text-[17px] font-medium text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                minus?
              </h3>
              <div className="text-[12px]">
                <span className="text-foreground font-medium">User</span>
                <span className=" text-muted-foreground font-medium">{` - 02 Oct`}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularItems
