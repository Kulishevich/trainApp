import React, { FC, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { programs } from '../../data/programs'
import styles from './ProgramPage.module.css'

export const ProgramPage: FC = () => {
  const { id } = useParams<string>()
  const program = programs[Number(id)]  

  const navigate = useNavigate()
    return (
    <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title} >{program.title}</h1>
          <img  className={styles.image} src={program.img} alt="img" />
        </div>
        <p className={styles.text} >{program.text}</p>
        <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}