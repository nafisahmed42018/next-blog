'use client'
import Image from 'next/image'
import React from 'react'
import {
  MessageCircleIcon,
  EyeIcon,
  BookmarkCheckIcon,
  BookmarkPlusIcon,
  Share2Icon,
} from 'lucide-react'

interface HeaderProps {
  userName: string
  img?: string
  views: number
  createdAt: string
}
const Header: React.FC<HeaderProps> = ({ userName, img, views, createdAt }) => {
  const isSaved = false
  return (
    <div className="flex flex-col gap-4 md:gap-8 max-w-[900px] w-full">
      {!img && (
        <div className="relative ">
          <Image
            src="/nebula.jpg"
            height={300}
            width={900}
            className=" aspect-video rounded-md"
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-4">
          <Image
            src={`${img || '/placeholder.jpg'}`}
            height={42}
            width={42}
            alt=""
            className="rounded-full"
          />
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-[16px] font-medium cursor-pointer">
              {userName}
            </h5>
            <div className="text-[14px] font-light">
              {String(createdAt)
                .substring(0, 10)
                .split('-')
                .reverse()
                .join('-')}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 px-2 border-y">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-1 md:gap-2 hover:text-primary cursor-pointer">
            <EyeIcon /> <p className="text-[14px] font-light"> {views}</p>
          </div>
          <div className="flex items-center gap-1 md:gap-2 hover:text-primary cursor-pointer">
            <MessageCircleIcon /> <p className="text-[14px] font-light">16</p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          {isSaved ? (
            <div className="hover:text-primary cursor-pointer">
              <BookmarkCheckIcon />
            </div>
          ) : (
            <div className="hover:text-primary cursor-pointer">
              <BookmarkPlusIcon />
            </div>
          )}
          <div className="hover:text-primary cursor-pointer">
            <Share2Icon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
