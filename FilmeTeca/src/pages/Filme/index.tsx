import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// type Filme = {
//   id: String;
//   title: String;
//   genres : [id: Number, name: String]
//   overview: String;
//   poster_path: String;
//   vote_average: String;
//   release_date: String;
// }


export function Filme() {
  
  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  // const [filme, setFilme] = useState<Filme[]>([])
  const [filme, setFilme]  = useState([])
  

  useEffect(() => {
    axios.get(`https://api-filmeteca.herokuapp.com/filmes/procurar?id_filme=${id}`)
      .then(response => {
        setFilme(response.data)
      })
  }, [id])
  
  console.log(filme)

  return (
    <div>
      <a><img src={`${image_path}${filme.poster_path}`} alt="" /></a>
      <h1>{filme.title}</h1>
      <p><strong>{filme.overview}</strong></p>
      
    </div>



    // https://api-filmeteca.herokuapp.com/filmes/procurar?id_filme=385128-f9


  )
}