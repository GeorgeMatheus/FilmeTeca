import React from "react";
import { useApi } from "../../hooks/useApi";
import { Title, Container, ContainerFilme } from './styles'
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
  const { data: filmes, isFetching} = useApi<Filme[]>('filmes/populares')

  return(
      <Container>
        <div>
          <h2>Filtros</h2>

          <ul>
            <li>Ação</li>
            <li>Aventura</li>
            <li>Drama</li>
            <li>Comédia</li>
            <li>Terror</li>
            <li>Suspense</li>
          </ul>
        </div>

        <div>
          <Title>Filmes Populares</Title>
          <Formulario />

          <ul>
          {/* filmes? - Pode ser nulo pois a requisição a API ainda pode não ter sido carregado e quando carregar apresentar.*/}
          {isFetching && <p>Carregando...</p>}
          {filmes?.map(filme => {
            return (
              <li key={filme.id.toString()}>
                <img src={`${image_path}${filme.poster_path}`}></img>
                <strong>{filme.title}</strong>
                <p>{filme.vote_average}</p>
                <p>{filme.release_date}</p>
              </li>
            )
          })}

          </ul>
        </div>
      </Container>
  )
}