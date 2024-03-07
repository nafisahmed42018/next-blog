'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import useSWR from 'swr'

const CommentBox = () => {
  const isAuthenticated = false
  const hasComment = true
  return (
    <div className="max-w-[900px] w-full flex self-center flex-col gap-8 py-4 lg:py-8">
      <h2 className="text-[24px] font-medium">Comments</h2>

      {isAuthenticated ? (
        <div className="flex flex-col md:flex-row items-start md:items-center  gap-8">
          <textarea
            name=""
            id=""
            placeholder="Write a comment..."
            className="resize-none w-full bg-muted h-20 p-4 rounded-lg focus:outline-primary"
          />
          <Button>Send</Button>
        </div>
      ) : (
        <Link href="/login" className="text-xl font-medium hover:text-primary">
          Login to comment..
        </Link>
      )}
      <div
        className="py-4
      "
      >
        {hasComment ? (
          <div className="flex flex-col gap-4">
            {/* Commenter's info  */}
            <div className="flex items-center gap-4">
              <Image
                src={'/placeholder.jpg'}
                height={42}
                width={42}
                className="rounded-full border border-accent"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-[16px] font-medium">User Name</span>
                <span className="text-[14px] font-light">02/10/2023</span>
              </div>
            </div>
            {/* Comment content */}
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ) : (
          <div className="text-xl font-medium">Be the first to comment...</div>
        )}
      </div>
    </div>
  )
}

export default CommentBox
