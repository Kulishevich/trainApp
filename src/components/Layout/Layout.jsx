import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.main}>
      <img src="/images/image2.jpg" alt="" className={styles.image}/>
      <div className={styles.container}>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}