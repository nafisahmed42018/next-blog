'use client'
import { useEffect, useState } from 'react'
import { getPosts } from '@/actions/getPosts'
import Pagination from '../pagintation/Pagination'
import { Post } from '@prisma/client'
import PostItem from '../post/Post'

interface PostListProps {
  heading: string
  page: number
  category?: string
}

const PostList: React.FC<PostListProps> = ({ heading, page, category }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [count, setCount] = useState<number>(0)
  const [hasPrev, setHasPrev] = useState<boolean>(false)
  const [hasNext, setHasNext] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const { posts, count, postPerPage } = await getPosts(page, category)
      setPosts(posts)
      setCount(count)

      const prev = postPerPage * (Number(page) - 1) > 0
      const next = postPerPage * (Number(page) - 1) + postPerPage < count
      setHasPrev(prev)
      setHasNext(next)
    }

    fetchData()
  }, [page])

  return (
    <div className="flex-[5]">
      <h2 className="text-4xl font-bold mb-12 capitalize">{heading}</h2>
      <div className="flex flex-col items-start justify-center gap-8">
        {posts.map((post: Post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default PostList
