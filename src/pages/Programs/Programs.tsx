import React, { FC } from 'react'
import styles from './Programs.module.css'
import { programs } from '../../data/programs'
import {ProgramElem} from '../../components/ProgramElem/ProgramElem'


export const Programs: FC = () => {
  return (
    <div className={styles.main}>
      {programs.map((elem, index) => <ProgramElem key={index} elem={elem} index={index}/>)}
    </div>
  )
}
