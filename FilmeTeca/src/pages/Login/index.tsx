import React, { useState } from "react"
import './style.scss'
import { Navbar } from "../../components/Navbar"


export function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return(
    <>
    <Navbar />
    <div className="container-principal">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <div className="wrap-input">
              <input className={email != "" ? "input has-val" : "input"} type="email" value={email} onChange={e => setEmail(e.target.value)}/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password != "" ? "input has-val" : "input"} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>
            
            <div className="novo-cadastro">
              <span className="realiza-cadastro">Não possui conta?</span>
              <a href="#" className="link-cria-cadastro">Criar Conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
    </>

  );
}