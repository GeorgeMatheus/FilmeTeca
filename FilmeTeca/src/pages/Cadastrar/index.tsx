import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Botao } from "../../components/Botao";
import { Layout } from "../../components/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import './style.scss'


export function Cadastrar() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nome, setNome] = useState("")

  return (
    <>
      <Navbar />
      <Layout>
        <form className="login-form">
          <span className="login-form-title">Crie aqui a sua conta!</span>

          <div className="wrap-input">
            <input className={nome != "" ? "input has-val" : "input"} type="name" value={nome} onChange={e => setNome(e.target.value)} />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          <div className="wrap-input">
            <input className={email != "" ? "input has-val" : "input"} type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input className={password != "" ? "input has-val" : "input"} type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <Botao>
              Cadastrar
            </Botao>
          </div>

          <div className="novo-cadastro">
            <span className="realiza-cadastro">Já possui conta?</span>
            <Link to={`/login`} className="link-cria-cadastro">Faça o seu login</Link>
          </div>

        </form>
      </Layout>
    </>
  )
}