import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export const GET = async (req: Request, { params }: any) => {
  const { postId } = params

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { user: true },
    })

    return new NextResponse(JSON.stringify({ post, status: 200 }))
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: `Something went wrong!`,
        status: 500,
      }),
    )
  }
}
