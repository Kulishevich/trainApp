import React from 'react'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

const navMenu = ['Главная', 'Программа тренировок', 'Результаты', 'Заметки']
const navRoutes = ['/', 'program', 'result', 'notes']

export default function Header() {
  return (<>
      <div className={styles.main}>
        <nav className={styles.nav}>
            {navMenu.map((nav, index) => 
              <NavLink key={index} className={styles.navElem} to={navRoutes[index]}>{nav}</NavLink>
            )}
        </nav>
    </div>
    </>
  )
}
