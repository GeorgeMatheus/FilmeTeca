import React from "react";
import { useApi } from "../../hooks/useApi";
import { Title, ContainerFilme, ListaFilmes, Container, ContainerFiltros, CardFilme, MediaCard } from './styles'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Formulario } from '../../components/Formulario'

type Filme = {
  id: Number;
  title: String;
  overview: String;
  poster_path: String;
  vote_average: String;
  release_date: String;

}


export function Home() {

  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const { data: filmes, isFetching } = useApi<Filme[]>('filmes/populares')

  return (
    <>
      <Navbar />
      <Container>
        <ContainerFiltros>
          <h2>Filtros</h2>

          <ul>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Drama</li>
            <li>Comédia</li>
            <li>Terror</li>
            <li>Suspense</li>
          </ul>
        </ContainerFiltros>

        <ContainerFilme>
          <Title>Filmes Populares</Title>
          <Formulario />

          <ListaFilmes>
            {/* filmes? - Pode ser nulo pois a requisição a API ainda pode não ter sido carregado e quando carregar apresentar.*/}
            {isFetching && <p>Carregando...</p>}
            {filmes?.map(filme => {
              return (

                <CardFilme>
                  <li key={filme.id.toString()}>

                    <MediaCard>

                      <Link to={`/filme/${filme.id}`}><img src={`${image_path}${filme.poster_path}`}></img></Link>
                      {/* <a href="#"><img src={`${image_path}${filme.poster_path}`}></img></a> */}

                      <strong><h3>{filme.title}</h3></strong>

                      {/* <p>{filme.vote_average}</p> */}
                      <p>{filme.release_date}</p>
                    </MediaCard>
                  </li>
                </CardFilme>
              )
            })}

          </ListaFilmes>
        </ContainerFilme>
      </Container>
    </>
  )
}