import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts />

      <div className={styles.categories}>
        <h2 className={styles.subtitle}>Discover by category</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories />
      </div>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor&apos;s Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu
Menu
