import { useEffect, useState } from "react"


type Filme = {
  id: Number;
  title: String;
  overview: String;
}

export function Api() {

  const [filmes, setFilmes] = useState<Filme[]>([])

  useEffect(() => {
    fetch('https://api-filmeteca.herokuapp.com/filmes/populares')
      .then(response => response.json())
      .then(data => {
        setFilmes(data)
      })
  }, [])

  return (
    <ul>
      {filmes.map(filme => {
        return (
          <li key={filme.id}>
            <strong>{filme.title}</strong>
            <p>{filme.overview}</p>
          </li>
        )
      })}

    </ul>
  )
}
