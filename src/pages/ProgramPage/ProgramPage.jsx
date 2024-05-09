import React from 'react'
import { useParams } from 'react-router-dom'
import { programs } from '../../data/programs'

export default function ProgramPage() {
  const { id } = useParams()
  const program = programs[id]

    return (
    <div>
        <h1>{program.title}</h1>
        <p>{program.text}</p>
        <img src={program.img} alt="" />
    </div>
  )
}
