import { useEffect, useState } from "react"
import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api-filmeteca.herokuapp.com/'
})


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


