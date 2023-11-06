import prisma from '@/app/utils/connect'
import { NextResponse } from 'next/server'

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Post not found' }, { status: 500 })
    )
  }
}
