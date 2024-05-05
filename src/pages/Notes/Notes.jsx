import React from 'react'
import { useGetNotesQuery } from '../../redux/api/api'

export default function Notes() {
  const { data, error, isLoading }  = useGetNotesQuery()
  console.log(data)
  return (
    <div>
      <h1>Заметки:</h1>
    </div>
  )
}
