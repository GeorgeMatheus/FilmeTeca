import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";




export function Navbar(){
  return(
    <header>
      <nav>
        <Link to={`/`}><a href="" className="logo">Filmeteca</a></Link>
        <div>
          <Link to={`/login`}><button className="btn-navbar">Entrar</button></Link>
        </div>
      </nav>
    </header>
  );
}

// <Link to={`/filme/${filme.id}`}><img src={`${image_path}${filme.poster_path}`}></img></Link>