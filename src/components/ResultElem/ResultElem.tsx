import React, { FC, useState } from 'react'
import styles from './ResultElem.module.css'
// @ts-ignore
import { useEditResultMutation } from '../../redux/api/api'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ResultElemType } from 'types/types';

interface ResultElemProps{
  elem: ResultElemType
}

export const ResultElem: FC<ResultElemProps> = ({elem}) => {
  const [value, setValue] = useState({ // state хранения данных result и maxResult
    result: elem.result,
    maxResult: elem.maxResult,
  })
  const [editStatusResult, setEditStatusResult] = useState({ //state состояния редактирования result и maxResult
    result: false,
    maxResult: false,
  }) 

  const [editResult] = useEditResultMutation()

  const handleResult = () => {
    editResult({
      id: elem.id,
      data: {
        ...elem,
        result: value.result
      }
    })
    setEditStatusResult(prev => ({
      ...prev,
      result: false,
    }))
  }

  const handleMaxResult = () => {
    editResult({
      id: elem.id,
      data: {
        ...elem,
        maxResult: value.maxResult
      }
    })
    setEditStatusResult(prev => ({
      ...prev,
      maxResult: false,
    }))
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{elem.category.toUpperCase()}</h1>
        <h3>{elem.exercise}</h3>
      </div>
      <div className={styles.results}>
        {/* REUSLT 1 */}
        <p>Рабочий вес: {editStatusResult.result ? 
        <label className={styles.editPanel}>
          <input 
          placeholder='Ввод:' 
          value={value.result} 
          onChange={(e) => setValue(prev => ({
            ...prev,
            result: e.target.value
          }))}/> 
            <FaCheck 
              className={styles.btn}
              style={{backgroundColor: 'rgb(14, 194, 8)'}}
              onClick={() => handleResult()}
            />
            <IoMdClose 
              className={styles.btn}
              style={{backgroundColor: 'rgb(218, 16, 16)'}}
              onClick={() => setEditStatusResult(prev => ({...prev, result: false}))}
            />
        </label>
          : 
        <span 
        className={styles.result} 
        onClick={() => setEditStatusResult(prev => ({
          ...prev,
          result: true,
        }))}>{elem.result}</span>}</p>
        {/* REUSLT 2 */}
        <p>Максимальный вес: {editStatusResult.maxResult ?
          <label className={styles.editPanel}>
          <input 
          placeholder='Ввод:' 
          value={value.maxResult} 
          onChange={(e) => setValue(prev => ({
            ...prev,
            maxResult: e.target.value
          }))}/> 
            <FaCheck 
              className={styles.btn}
              style={{backgroundColor: 'rgb(14, 194, 8)'}}
              onClick={() => handleMaxResult()}
            />
            <IoMdClose 
              className={styles.btn}
              style={{backgroundColor: 'rgb(218, 16, 16)'}}
              onClick={() => setEditStatusResult(prev => ({...prev, maxResult: false}))}
            />
        </label> 
            : 
          <span className={styles.result} onClick={() => setEditStatusResult(prev => ({
            ...prev,
            maxResult: true,
          }))}>{elem.maxResult}</span>}
        </p>
      </div>
    </div>
  )
}
