import React from "react";
import { useApi } from "../../hooks/useApi"
import './style.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Formulario } from '../../components/Formulario/Formulario'
import { FaStar } from 'react-icons/fa'

type Filme = {
  id: Number;
  title: String;
  poster_path: String;
  vote_average: String;
  release_date: String;
}


export function Home() {

  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const { data: filmes, isFetching } = useApi<Filme[]>('filmes/populares')

  const filtros = ['Ação', 'Aventura', 'Drama', 'Comédia', 'Terror', 'Suspense', 'Ficção científica', 'Romance']

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-genero">
          <h2>Gêneros</h2>
          {filtros?.map(filtro => {
            return (
 
              <li className="lista-genero" key={filtro}>
                {/* <input type="checkbox">{filtro}</input> */}
                <input type="checkbox" />
                <label> {filtro}</label>

              </li>
            )
          })}
        </div>

        <div className="container-filmes">
          {/* <Title>Filmes Populares</Title> */}
          <h1 className="title">Filmes Populares</h1>
          <Formulario />

          <div className="lista-filmes">
            {/* filmes? - Pode ser nulo pois a requisição a API ainda pode não ter sido carregado e quando carregar apresentar.*/}
            {isFetching && <p>Carregando...</p>}
            {filmes?.map(filme => {
              console.log(filme.release_date)
              return (
                  <li className="card-filme" key={filme.id.toString()}>

                    <div className="img-card">
                      <Link to={`/filme/${filme.id}`}><img src={`${image_path}${filme.poster_path}`}></img></Link>

                      <div className="pontuacao-filme">
                          <div className="pontuacao-info">
                            <span className="icone"><FaStar/></span>
                            <span className="nota">{filme.vote_average}</span>
                          </div>
                      </div>

                      {/* <a href="#"><img src={`${image_path}${filme.poster_path}`}></img></a> */}
                    </div>
                    
                    <div className="info-card">
                      <strong><h4>{filme.title}</h4></strong>

                      {/* <p>{filme.vote_average}</p> */}
                      <p>{filme.release_date}</p>
                    </div>
                  </li>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}