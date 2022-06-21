import React, { useContext } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
// import { Botao } from "../../components/Botao"
import { Rodape } from "../../components/Rodape"
import { AuthContext } from "../../contexts/auth"
import './style.scss'
import {ImHeart} from "react-icons/im"
import imgTest from "./img_avatar.png"

export function Perfil() {

  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return(
    <>

    <div className="container">

      <Navbar/>

      <div className = "containerPage">

        <div className= "profileCard">
          <img src={imgTest} alt="profile" className="photo"/>
          <div className="profileInfo">
              <h4>Nome da Pessoa</h4> 
              <p>membro desde</p> 
          </div>
        </div>

        <div className="containerFilmes">
          
          <div className="favoritos_header">
            <pre className="titulo">
              {/* utilizado a tag PRE para retornar mais de um espaço */}
              <ImHeart/>  Favoritos
            </pre>
          </div>
          <div className="favoritos_container">
            aqui os filmes favoritados
          </div>

          <div className="interesses_header">
            <pre className="titulo"> Interesses</pre>
          </div>
          <div className="interesses_container">
          <p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Test</p><p>Ultima Linha</p>
          </div>

        </div>
      </div>

      
      {/* <button onClick={handleLogout}>Sair</button> */}

      <Rodape />
    </div>
    </>
  )
}