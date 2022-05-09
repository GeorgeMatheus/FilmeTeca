import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home/"
import { DetalhesFilme } from "../pages/Filme/"
import {Login } from "../pages/Login"


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<DetalhesFilme />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>

  )

}