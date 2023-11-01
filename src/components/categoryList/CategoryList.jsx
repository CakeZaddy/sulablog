import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href='/blog?cat=style'
          className={`${styles.category} ${styles.style}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/style.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          style
        </Link>
        <Link
          href='/blog?cat=fashion'
          className={`${styles.category} ${styles.fashion}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/fashion.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          fashion
        </Link>
        <Link
          href='/blog?cat=food'
          className={`${styles.category} ${styles.food}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/food.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          food
        </Link>
        <Link
          href='/blog?cat=travel'
          className={`${styles.category} ${styles.travel}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/travel.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          travel
        </Link>
        <Link
          href='/blog?cat=culture'
          className={`${styles.category} ${styles.culture}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/culture.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          culture
        </Link>
        <Link
          href='/blog?cat=coding'
          className={`${styles.category} ${styles.coding}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src='/coding.png'
              alt=''
              fill
              // width={32}
              // height={32}
              className={styles.image}
            />
          </div>
          coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
