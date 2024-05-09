import React, { useState } from 'react'
import styles from './NoteCreateForm.module.css'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useCreateNoteMutation } from '../../redux/api/api';


export default function NoteCreateForm({setEditStatus}) {
    const [titleValue, setTitleValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const [createNote] = useCreateNoteMutation()

    const addNewNote = () => {
      if(titleValue && textValue) {
        createNote({
          title: titleValue,
          note: textValue,
          status: false,
        })
        setTitleValue('')
        setTextValue('')
        setEditStatus(false)
      }
    }

  return (
    <div className={styles.main}>
        <div className={styles.header}>
                <input 
                    placeholder='Заголовок' 
                    value={titleValue} 
                    onChange={e => setTitleValue(e.target.value)}
                    className={styles.inpt1}
                />
          <div className={styles.tools}>
            <FaCheck 
                className={styles.btn}
                onClick={addNewNote}
            />
            <IoMdClose 
                className={styles.btn} 
                onClick={() => setEditStatus(false)}/>
          </div>
        </div>
            <input 
            placeholder='Текст' 
            value={textValue} 
            onChange={e => setTextValue(e.target.value)}
            className={styles.inpt2}/>
    </div>
  )
}
