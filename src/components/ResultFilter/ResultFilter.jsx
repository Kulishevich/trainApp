import React from 'react'
import styles from './ResultFilter.module.css'

export default function ResultFilter({activeFilter, setActiveFilter, filter}) {


    return (
    <div className={styles.main}>
        {filter.map((elem, index) => <li className={activeFilter == index ? `${styles.elem} ${styles.active}` : `${styles.elem}`} onClick={() => setActiveFilter(index)}>{elem.toUpperCase()}</li>)}
    </div>
  )
}
