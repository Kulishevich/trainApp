import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const navMenu = ['Главная', 'Программа тренировок', 'Результаты', 'Заметки']
const navRoutes = ['/', 'program', 'result', 'notes']

export default function Header() {
  return (<>
      <div className={styles.main}>
        <nav className={styles.nav}>
            {navMenu.map((nav, index) => 
              <Link key={index} className={styles.navElem} to={navRoutes[index]}>{nav}</Link>
            )}
        </nav>
    </div>
    </>
  )
}
