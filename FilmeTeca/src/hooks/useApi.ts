import { useEffect, useState } from "react"
import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api-filmeteca.herokuapp.com/'
})

// const teste = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=d7251e004d1f3faea8a9b0f9405646b6&language=pt-BR&sort_by=popularity.desc&include_adult=false&with_genres='
// })


// export function testeGenero<T = unknown>(url: string) {
 
//   // Dados genericos recebido de uma API
//   const [data, setData] = useState<T | null>(null)

//   // Estado da requisição
//   const [isFetching, setIsFetching] = useState(true)

//   //Caso a requisição falhe é enviado um erro
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     teste.get(url)
//       .then(response => {
//         setData(response.data.results)
//       })
//       .catch ( err => {
//         setError(err);
//       })
//       .finally(() => {
//         setIsFetching(false)
//       })
//   }, [])

//   return { data, error, isFetching }

// }


export function useApi< T = unknown>(url: string) {

  // Dados genericos recebido de uma API
  const [data, setData] = useState<T | null>(null)
  
  // Estado da requisição
  const [isFetching, setIsFetching] = useState(true)

  //Caso a requisição falhe é enviado um erro
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.results)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }

}

export function listarGeneros< T = unknown>(url: string) {

  // Dados genericos recebido de uma API
  const [data, setData] = useState<T | null>(null)
  
  // Estado da requisição
  const [isFetching, setIsFetching] = useState(true)

  //Caso a requisição falhe é enviado um erro
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.genres)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }

}




export function infoFilme<T = unknown>(url: string, id: string) {

    // Dados genericos recebido de uma API
    const [data, setData] = useState<T | null>(null)
  
    // Estado da requisição
    const [isFetching, setIsFetching] = useState(true)
  
    //Caso a requisição falhe é enviado um erro
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(`${url}${id}`)
      .then(response => {
        setData(response.data)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [id])


  return { data, error, isFetching }
}


