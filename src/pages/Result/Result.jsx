import React, { useState } from 'react'
import { useGetResultQuery } from '../../redux/api/api'
import styles from './Result.module.css'
import ResultElem from '../../components/ResultElem/ResultElem'
import ResultFilter from '../../components/ResultFilter/ResultFilter'

const filter = ['all','chest','triceps','back']
const images = ['/images/chest.jpeg', '/images/triceps.jpg', '/images/back.jpg', '/images/bicepc.jpg']

export default function Result() {
  const [activeFilter, setActiveFilter] = useState(0)
  
  const { data, error, isLoading } = useGetResultQuery()
  console.log(data)

  return (
    <div className={styles.main}>
      <ResultFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} filter={filter}/>
      <div className={styles.container}>
        {isLoading ? <h2>Loading...</h2> : data.filter(obj => {
          if(activeFilter == 0) return obj
          if(obj.category == filter[activeFilter]) return obj
        }).map((elem, index) => <ResultElem key={index} elem={elem}/>)}
      </div>
    </div>
  )
}
