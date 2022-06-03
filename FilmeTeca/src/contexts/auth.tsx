import React, { createContext, useState, ReactNode, useEffect } from "react";
import { TypeAuthProvider } from "../hooks/tipos";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null)


type User = {
  id: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null;
}

export function AuthProvider(props:TypeAuthProvider) {
  
  const [user, setUser] = useState()
  const navigate = useNavigate()


  


  const login = (email: string, password: string) => {

    console.log("Login auth", {email, password})

    // api criar uma session

    const usuarioLogado = {
      id: "123",
      email
    }

    localStorage.setItem("user", JSON.stringify(usuarioLogado))


    if(password == "123"){
      setUser(usuarioLogado)
      navigate("/perfil")
    }
    
  }
  
  const logout = () => {
    console.log("logout")
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{autenticated: !!user, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )



}