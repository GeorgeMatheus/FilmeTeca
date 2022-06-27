import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Botao } from "../../components/Botao"
import { Navbar } from "../../components/Navbar/Navbar"
import { AuthContext } from "../../contexts/Auth/AuthContext"



export function Perfil() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.logout()
    navigate("/login")
  }

  return(
    <>
      {console.log(auth.user)}
      <Navbar />
      <h1>Perfil</h1>
      <h2>Ola {auth.user?.nome}</h2>
      <button onClick={handleLogout}>Sair</button>
    </>

  )
}