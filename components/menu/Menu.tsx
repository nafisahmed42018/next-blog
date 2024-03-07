'use client'
import React from 'react'
import PopularItems from './PopularItems'
import EditorsPick from './EditorsPick'
import Discover from './Discover'

interface MenuProps {
  popular?: boolean
  categories?: boolean
  editorsPick?: boolean
}

const Menu: React.FC<MenuProps> = ({
  popular = true,
  categories = true,
  editorsPick = true,
}) => {
  const items = [1, 2, 3, 4]
  return (
    <div className="flex-[2] mt-0 xl:mt-16">
      <div className="flex flex-col gap-12">
        {popular && <PopularItems />}
        {categories && <Discover />}
        {editorsPick && <EditorsPick />}
      </div>
    </div>
  )
}

export default Menu
