import React, { FC } from 'react'
import styles from './ResultFilter.module.css'

interface ResultFilterProps {
  activeFilter:  number,
  setActiveFilter:  (index: number) => void,
  filter: string[],
}

export const ResultFilter: FC<ResultFilterProps> = ({activeFilter, setActiveFilter, filter}) => {

    return (
    <div className={styles.main}>
        {filter.map((elem, index) => <li className={activeFilter == index ? `${styles.elem} ${styles.active}` : `${styles.elem}`} onClick={() => setActiveFilter(index)}>{elem.toUpperCase()}</li>)}
    </div>
  )
}
