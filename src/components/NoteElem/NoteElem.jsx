import React, { useState } from 'react'
import styles from './NoteElem.module.css'
import { MdModeEditOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useDeleteNoteMutation, useEditNotesMutation } from '../../redux/api/api';

export default function NoteElem({note}) {
  const [noteStatus, setNoteStatus] = useState(false) // срабатывает по нажатию на Галочку на задаче, типо отметка о выполнении
  const [editStatus, setEditStatus] = useState(false) //статус редактирования задачи
  const [editValue, setEditValue] = useState({
    title: '',
    note: ''
  })

  const [deleteNote] = useDeleteNoteMutation()
  const [editNotes] = useEditNotesMutation()
  
  const toggleStatusEdit = () => {
    setEditStatus(true)
    setEditValue({
      title: note.title,
      note: note.note
    })
  }

  const handleEditNote = (id) => {
    editNotes({id, data: {
      title: editValue.title,
      note: editValue.note,
    }})
    setEditStatus(false)
  }
  console.log(note)
  
  return (
    <div className={`${styles.main} ${noteStatus && styles.active}`}>
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
              onClick={() => setNoteStatus(prev => !prev)}
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
