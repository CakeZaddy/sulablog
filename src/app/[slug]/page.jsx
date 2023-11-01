import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
            <div className={styles.userText}>
              <span className={styles.username}>Uncle Sula</span>
              <span className={styles.date}>23.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
