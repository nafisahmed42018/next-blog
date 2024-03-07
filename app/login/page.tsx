'use client'
import Container from '@/components/Container'
import Footer from '@/components/footer/Footer'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { redirect } from 'next/navigation'

function LoginPage() {
  const { data, status } = useSession()

  if (status === 'loading') {
    return <div className={`flex items-center justify-center`}>Loading...</div>
  }

  if (status === 'authenticated') {
    redirect('/')
  }

  return (
    <>
      <main className="flex flex-col pt-28">
        <section>
          <Container>
            <div className="h-[65vh] flex items-center justify-center">
              <div className="bg-accent flex flex-col gap-16 px-28 py-16 text-center rounded-lg">
                <div
                  className="text-wrap px-2 py-4 bg-primary rounded-lg text-white cursor-pointer"
                  onClick={() => signIn('google')}
                >
                  Signin with Google
                </div>
                <div className="text-wrap px-2 py-4 bg-[#3b5998] rounded-lg text-white cursor-pointer">
                  Signin with Facebook
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

export default LoginPage
