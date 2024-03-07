import Container from '@/components/Container'
import CategoryList from '@/components/categoryList/CategoryList'
import Featured from '@/components/featured/Featured'
import Menu from '@/components/menu/Menu'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import PostList from '@/components/postList/PostList'
import Footer from '@/components/footer/Footer'
import { getCategories } from '@/actions/getCategories'

interface IParams {
  page?: number
}
export default async function Home({
  searchParams,
}: {
  searchParams: IParams
}) {
  const page = (searchParams.page as number) || 1
  // console.log(page)

  const { categories } = await getCategories()
  return (
    <>
      <main className="flex flex-col pt-28">
        <section>
          <Container>
            <Featured />
            <CategoryList categories={categories} />
            <div className="flex items-start justify-center flex-col xl:flex-row gap-12 py-12">
              <PostList heading="Recent Posts" page={page} />
              <Menu />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
