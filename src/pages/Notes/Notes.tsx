import React, { FC, useState } from 'react'
import styles from './Notes.module.css'
//@ts-ignore
import { useGetNotesQuery } from '../../redux/api/api'
import { NoteElem } from '../../components/NoteElem/NoteElem'
import { NoteCreateForm } from '../../components/NoteCreateForm/NoteCreateForm'

export const Notes: FC = () => {
  const [editStatus, setEditStatus] = useState<boolean>(false)

  const { data, error, isLoading }  = useGetNotesQuery() //получаем(достаём) из RTK query данные 

  console.log(data)
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Заметки:</h1>
        <button onClick={() => setEditStatus(true)}>Добавить заметку</button>
      </div>
      <div className={styles.content}>
        {editStatus && <NoteCreateForm  setEditStatus={setEditStatus}/>}
        {isLoading ? <h2>Загрузка...</h2> : data && data.map((elem, index) => <NoteElem key={index} note={elem}/>)}
      </div>
    </div>
  )
}
