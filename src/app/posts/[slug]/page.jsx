import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http:localhost:3000' // Development API URL
    : 'https://sulablog-p92r833su-cakezaddy.vercel.app' // Production API URL

const getData = async (slug) => {
  const res = await fetch(`${API_URL}/api/posts/${slug}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const SinglePage = async ({ params }) => {
  const { slug } = params

  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImage}>
                <Image
                  src={data.user.image}
                  alt=''
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userText}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data?.img} alt='' fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={data.title} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
