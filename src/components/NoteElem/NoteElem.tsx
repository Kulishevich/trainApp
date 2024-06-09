import React, { FC, useState } from 'react'
import styles from './NoteElem.module.css'
import { MdModeEditOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { NoteElemType } from 'types/types';

interface NoteElemProps{
  note: NoteElemType
}

export const NoteElem: FC<NoteElemProps> = ({note}) => {
  const [editStatus, setEditStatus] = useState<boolean>(false) //статус редактирования задачи
  const [editValue, setEditValue] = useState<{
    title: string,
    note: string
  }>({
    title: '',
    note: ''
  })
  
  const toggleStatusEdit = () => {
    setEditStatus(true)
    setEditValue({
      title: note.title,
      note: note.note
    })
  }

  const handleEditNote = (id : number) => {
    setEditStatus(false)
  }
  console.log(note)
  
  return (
    <div className={`${styles.main} ${note.status && styles.active}`}>
        <div className={styles.header}> 
          {editStatus ? // в зависимости от состояния editStatus будет видет или input или p  (режим редактирования по кнопке)
            <input 
              className={styles.inpt1}
              placeholder='Заголовок'
              value={editValue.title}  
              onChange={(e) => setEditValue(prev => ({
                ...prev,
                title: e.target.value
              }))}
            /> 
            : 
            <h2 className={styles.title}>{note.title}</h2>
          }
          {/* Кнопки "Выполнения", "Редактирования" и "Удаления" : */}
          {editStatus ? 
          <div className={styles.tools}>
            <FaCheck 
              className={styles.btn}
              style={{
                backgroundColor: 'rgb(14, 194, 8)'
              }}
              onClick={() => handleEditNote(note.id)}
            />
            <IoMdClose 
              className={styles.btn}
              onClick={() => setEditStatus(false)}
              style={{backgroundColor: 'rgb(218, 16, 16)'}}
            />
          </div> 
          :           
          <div className={styles.tools}>
            <FaCheck 
              className={styles.btn} 
              onClick={() => editNotes({id: note.id, data: {
                status: !note.status
              }})}
            />
            <MdModeEditOutline 
              className={styles.btn}
              onClick={() => toggleStatusEdit()}
            />
            <IoMdClose 
              className={styles.btn}
              onClick={() => deleteNote(note.id)}
            />
          </div>}
        </div>
        {editStatus ? // в зависимости от состояния editStatus будет видет или input или p  (режим редактирования по кнопке)
        <input 
          className={styles.inpt2}
          placeholder='Текст'
          value={editValue.note}
          onChange={(e) => setEditValue(prev => ({
            ...prev,
            note: e.target.value
          }))}
        /> 
          : 
        <p className={styles.text}>{note.note}</p>
        }
    </div>
  )
}
