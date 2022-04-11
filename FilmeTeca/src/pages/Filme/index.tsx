import React from "react"
import { useParams } from "react-router-dom"


export function Filme() {
  
  const { id } = useParams()

  return (
    <h1>Filme</h1>

  )
}