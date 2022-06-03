import React, { useState, useContext } from "react";
import { TypeAuthProvider } from "../hooks/tipos";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Home } from "../pages/Home/"
import { DetalhesFilme } from "../pages/Filme/"
import { Login } from "../pages/Login"
import { Cadastrar } from "../pages/Cadastrar"
import { Perfil } from "../pages/Perfil"

import { AuthProvider, AuthContext } from "../contexts/auth";



export function AppRoutes() {

  const Private = (props: TypeAuthProvider) => {

    const { autenticated } = useContext(AuthContext)

    if(!autenticated) {
      return <Navigate to="/login" />
    }

    return props.children
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<DetalhesFilme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/perfil" element={<Private><Perfil /></Private>} />
        </Routes>
      </AuthProvider >
    </Router>

  )

}