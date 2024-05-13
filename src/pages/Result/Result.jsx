import React from 'react'
import { useGetResultQuery } from '../../redux/api/api'
import styles from './Result.module.css'
import ResultElem from '../../components/ResultElem/ResultElem'

export default function Result() {
  const { data, error, isLoading } = useGetResultQuery()
  console.log(data)

  return (
    <div className={styles.main}>
      {isLoading ? <h2>Loading...</h2> : data.map((elem, index) => <ResultElem key={index} elem={elem}/>)}
    </div>
  )
}
