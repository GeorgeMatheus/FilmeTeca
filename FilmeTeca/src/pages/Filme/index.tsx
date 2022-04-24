import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { infoFilme } from "../../hooks/useApi"
import './style.scss'

import { FaHeart, FaBookmark, FaStar, FaPlay } from 'react-icons/fa'


interface Genero {
  id: number;
  name: string;
}

interface Filme {
  id: string;
  backdrop_path: string;
  genres: Array<Genero>;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
}


export function Filme() {

  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const image_path_original = 'https://image.tmdb.org/t/p/original/'
  // const [filme, setFilme] = useState<Filme[]>([])

  const { data: filme, isFetching } = infoFilme<Filme>('filmes/procurar?id_filme=', id)


  return (


    <>
      {console.log(filme)}
      <Navbar />


      <div>
        {isFetching && <p>Carregando...</p>}

        <div className="container-Filme">
          <a><img src={`${image_path}${filme?.poster_path}`} alt="Foto de capa" /></a>

          <div className="container-infoFilme">
            <h1>{filme?.title}</h1>
            {/* <p>{filme?.vote_average}</p> */}


            <span className="lancamento">{`${filme?.release_date.slice(8, 10)}/${filme?.release_date.slice(5, 7)}/${filme?.release_date.slice(0, 4)}`}</span>


            <div className="generos">
              {(filme?.genres)?.map(genero => {
                return (
                  <li key={genero.id.toString()}>
                    {genero.name}
                  </li>
                )
              })}
            </div>

            <button className="btn-media"><FaHeart /></button>
            <button className="btn-media"><FaBookmark /></button>
            <button className="btn-media"><FaStar /></button>



            <h2 className="title-sinopse">Sinopse</h2>
            <p className="sinopse">{filme?.overview}</p>

          </div>
        </div>


        {/* <a><img src={`${image_path_original}${filme?.backdrop_path}`} width="1000px" alt="Foto de capa" /></a> */}



      </div>
    </>
  )

  // useEffect(() => {
  //   axios.get(`https://api-filmeteca.herokuapp.com/filmes/procurar?id_filme=${id}`)
  //     .then(response => {
  //       setFilme(response.data)
  //     })
  // }, [id])

  // console.log(filme)



  // return (
  //   <>
  //   <Navbar />
  //   <div>
  //     {isFetching && <p>Carregando...</p>}
  //     <a><img src={`${image_path}${filme?.poster_path}`} alt="Foto de capa" /></a>
  //     <h1>{filme?.title}</h1>
  //     <p><strong>{filme?.overview}</strong></p>
  //     <p>{filme?.genres.name}</p>

  //   </div>

  //   </>

  //   // https://api-filmeteca.herokuapp.com/filmes/procurar?id_filme=385128-f9


  // )
}