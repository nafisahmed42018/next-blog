;`use client`
import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'
import {type Post } from '@prisma/client'


interface PostProps {
  post: Post
}
const Post: React.FC<PostProps> = ({ post }) => {

  return (
    <div
      key={post.id}
      className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8"
    >
      {post.img && (
        <div className="relative ">
          <Image src={post.img} height={350} width={350} alt="" className="" />
        </div>
      )}
      <div className="flex-1 flex flex-col items-start justify-evenly gap-1.5 my-auto">
        <div className="flex items-center gap-4 my-1 cursor-pointer">
          <div className="relative content-center">
            <Image
              src="/placeholder.jpg"
              height={28}
              width={28}
              alt=""
              className="rounded-full"
            />
          </div>
          {/* @ts-ignore */}
          <h4 className="text-sm font-semibold">{post.user.name}</h4>
        </div>
        <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
        <p className="text-sm font-medium text-muted-foreground  line-clamp-2" dangerouslySetInnerHTML={{ __html: post.desc }} />
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-semibold underline underline-offset-2 -mt-2"
        >
          read more
        </Link>
        <div className="flex items-center gap-4">
          <div className="text-sm leading-3 font-semibold py-1">
            {String(post.createdAt)
              .substring(0, 10)
              .split('-')
              .reverse()
              .join('-')}
          </div>
          <Link
            href={`/blog?cat=${post.catSlug}`}
            className="flex items-center gap-2 py-0.5 px-2 rounded-full justify-center bg-accent text-center text-foreground"
          >
            {post.catSlug}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
