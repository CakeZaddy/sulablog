import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
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
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              aliquid voluptate iure itaque. Voluptate praesentium quasi sed
              optio vitae, minima accusantium aspernatur odio mollitia unde
              repudiandae nam! Aperiam dolor id, voluptas commodi libero aliquid
              eveniet. Sunt commodi excepturi nam, rem quidem vitae voluptate
              hic repellat amet, reiciendis eaque deleniti.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              aliquid voluptate iure itaque. Voluptate praesentium quasi sed
              optio vitae, minima accusantium aspernatur odio mollitia unde
              repudiandae nam! Aperiam dolor id, voluptas commodi libero aliquid
              eveniet. Sunt commodi excepturi nam, rem quidem vitae voluptate
              hic repellat amet, reiciendis eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              aliquid voluptate iure itaque. Voluptate praesentium quasi sed
              optio vitae, minima accusantium aspernatur odio mollitia unde
              repudiandae nam! Aperiam dolor id, voluptas commodi libero aliquid
              eveniet. Sunt commodi excepturi nam, rem quidem vitae voluptate
              hic repellat amet, reiciendis eaque deleniti.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              aliquid voluptate iure itaque. Voluptate praesentium quasi sed
              optio vitae, minima accusantium aspernatur odio mollitia unde
              repudiandae nam! Aperiam dolor id, voluptas commodi libero aliquid
              eveniet. Sunt commodi excepturi nam, rem quidem vitae voluptate
              hic repellat amet, reiciendis eaque deleniti.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
