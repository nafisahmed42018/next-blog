'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { Comment } from '@prisma/client'

interface CommentProps {
  postSlug: string
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }
  return data
}
const CommentBox: React.FC<CommentProps> = ({ postSlug }) => {
  const [comment, setComment] = useState('')
  const { data: session, status } = useSession()
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  )
  if (!data) return null
  const { comments } = data

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc: comment, postSlug }),
    })
    mutate()
    setComment('')
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Prevent the default form submission
      handleSubmit()
    }
  }
  return (
    <div className="max-w-[900px] w-full flex self-center flex-col gap-8 py-4 lg:py-8">
      <h2 className="text-[24px] font-medium">Comments</h2>

      {session ? (
        <div className="flex flex-col md:flex-row items-start md:items-center  gap-8">
          <textarea
            onKeyDown={handleKeyDown}
            name="comment-description"
            id=""
            placeholder="Write a comment..."
            className="resize-none w-full bg-muted h-20 p-4 rounded-lg focus:outline-primary"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      ) : (
        <Link href="/login" className="text-xl font-medium hover:text-primary">
          Login to comment..
        </Link>
      )}
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <div
          className="py-4
      "
        >
          {comments.length !== 0 ? (
            data.comments.map((comment: Comment) => (
              <div className="py-6">
                <div className="flex flex-col gap-4" key={comment.id}>
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
                      <span className="text-[16px] font-medium">
                        {/* @ts-ignore */}
                        {comment.user.name}
                      </span>
                      <span className="text-[14px] font-light">
                        {comment.createdAt
                          .toString()
                          .substring(0, 10)
                          .split('-')
                          .reverse()
                          .join('-')}
                      </span>
                    </div>
                  </div>
                  {/* Comment content */}
                  <div className=" border rounded bg-accent py-2 pl-1 pr-4">
                    <p>{comment.desc}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-xl font-medium">
              Be the first to comment...
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CommentBox
