import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http:localhost:3000' // Development API URL
    : 'https://sulablog-p92r833su-cakezaddy.vercel.app' // Production API URL

const getData = async () => {
  const res = await fetch(`${API_URL}/api/categories`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('failed')
  }

  return res.json()
}

const CategoryList = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            // href='/blog?cat=style'
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            <div className={styles.imageContainer}>
              {item.img && (
                <Image
                  src={item.img}
                  alt=''
                  fill
                  // width={32}
                  // height={32}
                  className={styles.image}
                />
              )}
            </div>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
