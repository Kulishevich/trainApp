import React, { FC, useState } from 'react'
import styles from './NoteCreateForm.module.css'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

interface NoteCreateFormProps {
  setEditStatus: (toggle: boolean) => void
}

export const NoteCreateForm: FC<NoteCreateFormProps> = ({setEditStatus}) => {
    const [titleValue, setTitleValue] = useState<string>('')
    const [textValue, setTextValue] = useState<string>('')

    const addNewNote = () => {
      if(titleValue && textValue) {
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
