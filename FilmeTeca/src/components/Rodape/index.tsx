// import React from "react"
import './style.scss'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa" //importa os incones do instagram, youtube e twitter
import { AiOutlineMail } from "react-icons/ai" //importa o incone de carta/email

export function Rodape() {
  return(
 
    <footer>
      
      <div className = "copyright">
        Filmeteca © 2022
      </div>

      <div className = "logo">
       Filmeteca
      </div>

      <div>
        <a target="_blank" href="https://www.instagram.com/filmetecaoficial/">
          <FaInstagram size = "40"/>
        </a>
        <a target="_blank" href="https://twitter.com/filmetecaoficial" >
          <FaTwitter size = "40"/>
        </a>
        <a target="_blank" href="https://www.facebook.com/filmetecaoficial">
          <FaFacebook size = "40"/>
        </a>
        {/* <a href="mailto:contato@filmeteca.com.br? Subject: Acessei seu Site&body=Muito Bom seu site.">
          <AiOutlineMail size = "40"/>
        </a> */}
      </div>

    </footer>
  )
}

