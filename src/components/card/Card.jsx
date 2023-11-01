import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <span className={styles.date}>10.11.2023 | </span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href='/'>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quas
          possimus? Harum consequatur neque eligendi corrupti.
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
