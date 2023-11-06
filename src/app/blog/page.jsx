import React from 'react'
import styles from './categoryPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

const CategoryPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams
  return (
    <div>
      <h1 className={styles.title}>{cat} Contents</h1>
      {/* <h1 className={`${styles.title} ${styles[cat]}`}>{cat}Contents</h1> */}
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPage
