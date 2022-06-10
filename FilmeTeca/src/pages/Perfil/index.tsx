import React, { useContext } from "react"
import { Botao } from "../../components/Botao"
import { AuthContext } from "../../contexts/auth"



export function Perfil() {

  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return(
    <>
      <h1>Perfil</h1>
      <button onClick={handleLogout}>Sair</button>
    </>

  )
}