import { useApi } from "../hooks/useApi";


type Filme = {
  id: Number;
  title: String;
  overview: String;
  poster_path: String;
  vote_average: String;
  release_date: String;

} 

export function Api() {

  // const [filmes, setFilmes] = useState<Filme[]>([])
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  // useEffect(() => {
  //   axios.get('https://api-filmeteca.herokuapp.com/filmes/populares')
  //     .then(response => {
  //       setFilmes(response.data.results)
  //     })
  // }, [])
  
  // isFetching - Irá retornar se está ocorrendo a requisição ou não, data - informações sobre filmes.
  const { data: filmes, isFetching} = useApi<Filme[]>('filmes/populares')

  return (
    <ul>
      {/* filmes? - Pode ser nulo pois a requisição a API ainda pode não ter sido carregado e quando carregar apresentar.*/}
      {isFetching && <p>Carregando...</p>}
      {filmes?.map(filme => {
        return (
          <li key={filme.id.toString()}>
            <strong>{filme.title}</strong>
            <p>{filme.overview}</p>
            <p>{filme.vote_average}</p>
            <p>{filme.release_date}</p>
            <img src={`${image_path}${filme.poster_path}`}></img>
          </li>
        )
      })}

    </ul>
  )
}
