import Container from '@/components/Container'
import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import PostList from '@/components/postList/PostList'
import React from 'react'
interface IParams {
  page?: number
  cat?: string
}
function BlogPage({ searchParams }: { searchParams: IParams }) {
  const page = searchParams.page || 1
  const { cat } = searchParams
  return (
    <>
      <main className="flex flex-col pt-28">
        <section>
          <Container>
            <div className="flex items-start justify-center flex-col xl:flex-row gap-12 py-12">
              <PostList heading={`${cat} Blogs`} page={page} category={cat} />
              <Menu />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogPage
