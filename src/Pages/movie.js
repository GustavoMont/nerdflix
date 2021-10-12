import React from 'react'
import { useParams } from 'react-router-dom'

export default function Movie(){

    const { type ,id } = useParams()

    return(
        <h1>{type}: {id}</h1>
    )

}