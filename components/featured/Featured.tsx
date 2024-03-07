'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className="py-12">
      <h1 className="text-6xl">
        <b>Welcome!</b> to my pen where you will find myself ranting about
        things which bothers me
      </h1>
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex relative">
          <Image
            src="/react.jpg"
            width={500}
            height={500}
            alt="blog"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-xl font-normal text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            perferendis et! Omnis animi accusantium, fuga temporibus eligendi a
            adipisci doloribus corrupti consequatur iusto voluptatum sequi est!
            Dolorum, accusamus animi delectus error, saepe maiores culpa veniam
            hic pariatur totam a suscipit?
          </p>
          <Button className="w-fit">Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured
