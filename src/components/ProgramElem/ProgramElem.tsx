import React, { FC } from 'react'
import styles from './ProgramElem.module.css'
import { Link } from 'react-router-dom'
import { NoteElemType, ProgramElemType } from 'types/types'

interface ProgramElemProps {
  elem: ProgramElemType,
  index: number
}

export const ProgramElem: FC<ProgramElemProps> = ({elem, index}) => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <h1>{elem.title}</h1>
            <p>{elem.text}</p>
            <Link to={`${index}`} className={styles.btn}>Выбрать</Link>
        </div>
        <img src={elem.img} alt="" className={styles.img}/>
    </div>
  )
}