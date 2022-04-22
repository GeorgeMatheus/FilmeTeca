import React from "react";
import './styles.scss'
import { FaSearch } from 'react-icons/fa'

export function Formulario() {
  return (
    <form className="search-box">
      <input placeholder="Pesquise um filme"/>

      <button type="submit">
        <FaSearch />
      </button>

    </form>
  )
}