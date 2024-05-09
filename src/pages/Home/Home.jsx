import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Добро пожаловать</h1>
          <p>Основной целью этого сайта(пет-проекта) является заменить Записную книжку на тренировках, отработать функционал, сделать что-то симпатичное и функциональное.</p>
          <button onClick={() => navigate('/program')}>Выбрать программу</button>
        </div>
        <img src='images/image7.jpg' alt="" className={styles.img1}/>
      </div>
      <div>
      </div>
    </div>
  )
}
