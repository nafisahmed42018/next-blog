import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getAuthSession } from '@/utils/auth'
import { Comment } from '@prisma/client'

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get('postSlug')

  try {
    const comments: Comment[] = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    })
    return new NextResponse(JSON.stringify({ comments, status: 200 }))
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: `Something went wrong!`,
        status: 500,
      }),
    )
  }
}

// CREATE COMMENT
export const POST = async (req: Request) => {
  const session = await getAuthSession()

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Not Authenticated!', status: 401 }),
    )
  }
  try {
    const body = await req.json()
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user?.email },
    })

    return new NextResponse(JSON.stringify({ comment, status: 200 }))
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!', status: 500 }),
    )
  }
}
