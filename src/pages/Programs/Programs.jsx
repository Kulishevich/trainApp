import React from 'react'
import styles from './Programs.module.css'
import { programs } from '../../data/programs'
import ProgramElem from '../../components/ProgramElem/ProgramElem'

export default function Programs() {
  return (
    <div className={styles.main}>
      {programs.map((elem, index) => <ProgramElem key={index} elem={elem} index={index}/>)}
    </div>
  )
}
