'use client'
import React from 'react'

interface BodyProps {
  title: string
  description: any
}
const Body: React.FC<BodyProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-start max-w-[900px] w-full">
      <h2 className="w-full font-semibold text-3xl">{title}</h2>
      <div
        className="max-w-[900px] w-full py-8 lg:py-16"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default Body
