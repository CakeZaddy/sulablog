'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  const { status } = useSession()
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <Link href='/login' className={styles.link} onClick={signOut}>
            Logout
          </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'notAuthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <Link href='/login'>Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
