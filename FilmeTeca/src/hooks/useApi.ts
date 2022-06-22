import { useEffect, useState } from "react"
import axios from 'axios'
import { User } from "../types/User"


export const api = axios.create({
  baseURL: 'https://api-filmeteca.herokuapp.com/'
})



export const criarAutenticacao = () => ({

  validateToken: async (token: string) => {
    const response = await api.post("validacao", {token})
  },

  login: async (email: string, senha: string) => {
    const response = await api.post("login", {email, senha})
    return response.data
  },

  recuperaUsuario: async (email: string, senha: string, token:string) =>{


    
    // api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    // // api.defaults.headers.Authorization = `Bearer ${token}`

    // api.defaults.headers.get['Content-Type'] = 'application/json'
    // const dados = {email: `${email}`, senha: `${senha}`}

    // console.log(email, senha)
    // api.defaults.headers.common = {'Authorization':`${token}`}
    // const response = await api.get("auth", {
    //   data: {
    //     email: `${email}`,
    //     senha: `${senha}`
    //   }
    // }).then((resposnse))


    const [usuario, setUsuario] = useState(null)
  
    // Estado da requisição
    const [isFetching, setIsFetching] = useState(true)
  
    //Caso a requisição falhe é enviado um erro
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
      const recUsuario = async () => {
        await api.get("auth",{data: {email, senha}})
        .then(response => {
          setUsuario(response.data)
        })
      }

      recUsuario()
    })
  
    // useEffect(() => {
    //   api.get("auth",{data: {email, senha}})
    //     .then(response => {
    //       setUsuario(response.data)
    //     })
    // }, [])

    return usuario
  },

  logout: async () => {
    const response = await api.post("logout")
    return response.data
  },

  cadastro: async (nome: string, email: string, senha:string) => {
    const response = await api.post("cadastro", {nome, email, senha})
    return response.data
  }

})


export const createSession = async (email: string, senha: string) =>{
  return api.post("login", {email, senha})

}



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


export function usuarioLogado< T = unknown>(email: string, senha:string, token: string) {

  // Dados genericos recebido de uma API
  const [data, setData] = useState<T | null>(null)
  
  // Estado da requisição
  const [isFetching, setIsFetching] = useState(true)

  //Caso a requisição falhe é enviado um erro
  const [error, setError] = useState<Error | null>(null);

  api.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  const dados = {email: `${email}`, senha: `${senha}`}

  useEffect(() => {
    api.get("auth", dados)
      .then(response => {
        console.log(response.data)
        setData(response.data)
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


