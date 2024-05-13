import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { programs } from '../../data/programs'
import styles from './ProgramPage.module.css'

export default function ProgramPage() {
  const { id } = useParams()
  const program = programs[id]
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