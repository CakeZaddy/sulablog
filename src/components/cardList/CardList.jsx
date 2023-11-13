import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http:localhost:3000' // Development API URL
    : 'https://sulablog-p92r833su-cakezaddy.vercel.app' // Production API URL

const getData = async (page, cat) => {
  const res = await fetch(
    `${API_URL}/api/posts?page=${page}&cat=${cat || ''}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat)

  const POST_PER_PAGE = 3

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  )
}

export default CardList
