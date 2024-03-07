import { getPostById } from '@/actions/getPostById'
import Container from '@/components/Container'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import Body from '@/components/singleBlog/Body'
import CommentBox from '@/components/singleBlog/CommentBox'
import Header from '@/components/singleBlog/Header'
import React from 'react'

const SingleBlogPage = async ({ params }: any) => {
  const { postId } = params
  const { post } = await getPostById(postId)


  return (
    <>
      <main className="flex flex-col pt-40">
        <section>
          <Container>
            <div className="flex ">
              <div className="flex items-center flex-col flex-[6] gap-12">
                <Header
                  userName={post.user.name}
                  img={post.user.image}
                  views={post.views}
                  createdAt={post.createdAt}
                />
                <Body title={post.title} description={post.desc} />
                <CommentBox />
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
