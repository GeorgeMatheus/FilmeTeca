import { useEffect, useState } from "react"
import axios from 'axios'


// type Filme = {
//   id: Number;
//   title: String;
//   overview: String;
// } 

export function Api() {

  const [filmes, setFilmes] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  // useEffect(() => {
  //   axios.get('https://api-filmeteca.herokuapp.com/filmes/populares')
  //     .then(response => {
  //       setFilmes(response.data)
  //     })
  // }, [])

  useEffect(() => {

    fetch('https://api-filmeteca.herokuapp.com/filmes/populares')
    .then(response => response.json())
    .then(data => setFilmes(data.results))
  }, [])

  return (
    <ul>
      {filmes.map(filme => {
        return (
          <li key={filme.id}>
            <strong>{filme.title}</strong>
            <p>{filme.overview}</p>
            <img src={`${image_path}${filme.poster_path}`}></img>
          </li>
        )
      })}

    </ul>
  )
}
