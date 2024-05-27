import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getAuthSession } from '@/utils/auth'

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page')
  const cat = searchParams.get('cat')

  const postPerPage = 3
  const query = {
    take: postPerPage,
    skip: postPerPage * (Number(page) - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    include: { user: true },
  }
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ])
    return new NextResponse(
      JSON.stringify({
        posts,
        count,
        postPerPage,
        status: 200,
      }),
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong',
        status: 500,
      }),
    )
  }
}
// CREATE A POST
export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Not Authenticated!', status: 401 }),
    )
  }

  try {
    const body = await req.json()
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    })

    return new NextResponse(JSON.stringify({ post, status: 200 }))
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!', status: 500 }),
    )
  }
}
