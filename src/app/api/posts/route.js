import prisma from '@/app/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  const { searchParams } = new URL(req.url)

  const page = searchParams.get('page')
  const cat = searchParams.get('cat')

  const POST_PER_PAGE = 3

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ])

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }))
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Posts not found' }, { status: 500 })
    )
  }
}

// export const GET = async () => {
//   try {
//     const posts = await prisma.post.findMany()

//     return new NextResponse(JSON.stringify(posts, { status: 200 }))
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({ message: 'Posts not found' }, { status: 500 })
//     )
//   }
// }
