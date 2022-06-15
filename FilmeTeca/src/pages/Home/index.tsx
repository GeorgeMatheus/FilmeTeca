import React, { useState } from "react";
import { useApi, listarGeneros, testeGenero } from "../../hooks/useApi"
import './style.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { Formulario } from '../../components/Formulario/Formulario'
import { FaStar } from 'react-icons/fa'
import { Filme, Genero, LayoutComponent } from '../../hooks/tipos'
import { Botao } from "../../components/Botao";
import { Rodape } from "../../components/Rodape";


export function Home() {

  const image_path = 'https://image.tmdb.org/t/p/w500/'
  let updatedList = []

  const { data: filmes, isFetching } = useApi<Filme[]>('filme/populares')

  const { data: generos, isFetching: isFetchingGenero } = listarGeneros<Genero[]>('genero')

  const [checked, setChecked] = useState([])


  const handleCheck = (event) => {

    updatedList = [...checked]

    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }

    setChecked(updatedList)
  }



  return (
    <>
      <Navbar />
      <div className="container">
        <div className="area-genero">
          <div className="container-genero">
            {/* <p>Filtrar por:</p> */}
            <h2>Gêneros</h2>
            {isFetchingGenero && <p>Carregando</p>}
            {generos?.map(genero => {
              return (
                <li className="lista-genero" key={genero.id}>
                  <input id={`genero-${genero.name}`} type="checkbox" onChange={handleCheck} name="genero" value={genero.id} />
                  <label htmlFor={`genero-${genero.name}`}>{genero.name}</label>

                </li>
              )
            })}

            {/* 
            <button  //</div>onClick={() => {
              // const {data: filmesPesquisaGenero, isFetching: isFetchingFilmesPesquisaGenero} = testeGenero<Filme[]>(updatedList.toString())
            //}}>
            >
              teste
            </button> */}


            <Botao>
              Aplicar Filtro
            </Botao>
          </div>
        </div>

        <div className="container-filmes">
          <h1 className="title">Filmes Populares</h1>
          <Formulario />

          <div className="lista-filmes">
            {/* filmes? - Pode ser nulo pois a requisição a API ainda pode não ter sido carregado e quando carregar apresentar.*/}
            {isFetching && <p>Carregando...</p>}
            {filmes?.map(filme => {
              return (
                <li className="card-filme" key={filme.id.toString()}>

                  <div className="img-card">
                    <Link to={`/filme/${filme.id}`}><img src={`${image_path}${filme.poster_path}`} alt="Capa Filme"></img></Link>

                    <div className="pontuacao-filme">
                      <div className="pontuacao-info">
                        <span className="icone"><FaStar /></span>
                        <span className="nota">{filme.vote_average}</span>
                      </div>
                    </div>

                    {/* <a href="#"><img src={`${image_path}${filme.poster_path}`}></img></a> */}
                  </div>

                  <div className="info-card">
                    <h4>{filme.title}</h4>

                    {/* <p>{filme.vote_average}</p> */}
                    <span>{(filme.release_date).slice(0, 4)}</span>
                  </div>
                </li>
              )
            })}

          </div>
        </div>
      </div>

      <Rodape />
    </>
  )
}

