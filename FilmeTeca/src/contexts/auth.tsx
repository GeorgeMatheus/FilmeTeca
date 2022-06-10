import React, { createContext, useState, ReactNode, useEffect } from "react";
import { TypeAuthProvider } from "../hooks/tipos";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../hooks/useApi";
import axios, { HeadersDefaults } from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string
}


export const AuthContext = createContext(null)


type User = {
  id: string;
  name: string;
  login: string;
}


export function AuthProvider(props:TypeAuthProvider) {
  
  const [user, setUser] = useState()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const usuarioRecuperado = localStorage.getItem("user")

    if(usuarioRecuperado) {
      setUser(JSON.parse(usuarioRecuperado))
    }

    setLoading(false)

  }, [])
  

  const login = async (email: string, password: string) => {

    const response = await createSession(email, password)

    console.log("Login auth", response.data)

    // const usuarioLogado = response.data.user
    const token = response.data
    console.log(token)

    // api criar uma session

    // localStorage.setItem("user", JSON.stringify(usuarioLogado))
    localStorage.setItem("token", token)
    
    api.defaults.headers = {
      Authorization: `Bearer ${token}`
    } as CommonHeaderProperties

    // api.defaults.headers.Authorization = `Bearer ${token}`

    
  }
  
  const logout = () => {
    console.log("logout")
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{autenticated: !!user, loading, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )



}