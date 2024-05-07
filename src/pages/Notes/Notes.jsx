import React, { useState } from 'react'
import styles from './Notes.module.css'
import { useGetNotesQuery } from '../../redux/api/api'
import NoteElem from '../../components/NoteElem/NoteElem'
import NoteCreateForm from '../../components/NoteCreateForm/NoteCreateForm'

export default function Notes() {
  const [editStatus, setEditStatus] = useState(false)

  const { data, error, isLoading }  = useGetNotesQuery() //получаем(достаём) из RTK query данные 

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Заметки:</h1>
        <button onClick={() => setEditStatus(true)}>Добавить заметку</button>
      </div>
      <div className={styles.content}>
        {editStatus && <NoteCreateForm  setEditStatus={setEditStatus}/>}
        {isLoading ? <h2>Загрузка...</h2> : data.map((elem, index) => <NoteElem key={index} note={elem}/>)}
      </div>
    </div>
  )
}
