import React from 'react'
import styles from './categoryPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

const CategoryPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Coding Contents</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPage
