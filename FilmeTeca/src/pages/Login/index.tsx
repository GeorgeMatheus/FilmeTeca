import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"
import './style.scss'
import { Navbar } from "../../components/Navbar/Navbar"
import { Layout } from "../../components/Layout"
import { Botao } from "../../components/Botao"


export function Login() {

  const { autenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()


    console.log("Login", {email, senha})
    login(email, senha)
  }

  return (
    <>
      <Navbar />
      <Layout>
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Bem Vindo!</span>

          <div className="wrap-input">
            <input className={email != "" ? "input has-val" : "input"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input className={senha != "" ? "input has-val" : "input"} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <Botao>Entrar</Botao>

            {/* <button className="login-form-btn">Entrar</button> */}
          </div>

          <div className="novo-cadastro">
            <span className="realiza-cadastro">Não possui conta?</span>
            <Link to={`/cadastrar`} className="link-cria-cadastro">Criar Conta</Link>
          </div>

        </form>
      </Layout>
    </>

  );
}