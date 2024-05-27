import Container from '@/components/Container'
import Editor from '@/components/Editor/Editor'
import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

async function WriteBlogPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }
  return (
    <>
      <main className="flex flex-col pt-28">
        <section>
          <Container>
            <div className="py-12">
              <Editor />
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export default WriteBlogPage
