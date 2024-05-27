import { getPostById } from '@/actions/getPostById'
import Container from '@/components/Container'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import Body from '@/components/singleBlog/Body'
import CommentBox from '@/components/singleBlog/CommentBox'
import Header from '@/components/singleBlog/Header'
import Image from 'next/image'
import React from 'react'

const SingleBlogPage = async ({ params }: any) => {
  const { postSlug } = params
  const { post } = await getPostById(postSlug)
  const commentCount = post.comments.length

  return (
    <>
      <main className="flex flex-col pt-40">
        <section>
          <Container>
            <div className="flex ">
              <div className="flex items-center flex-col flex-[6] gap-12">
                {post.img && (
                  <Image
                    src={post.img}
                    className=" w-fit aspect-video"
                    height={720}
                    width={1280}
                    alt=""
                  />
                )}
                <Header
                  userName={post.user.name}
                  img={post.user.image}
                  views={post.views}
                  createdAt={post.createdAt}
                  commentCount={commentCount}
                />
                <Body title={post.title} description={post.desc} />
                <CommentBox postSlug={postSlug} />
              </div>
              <div className="flex-[2] hidden 2xl:flex mt-[53vh]">
                <div className="h-fit sticky top-12">
                  <Menu categories={false} editorsPick={false} />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SingleBlogPage
