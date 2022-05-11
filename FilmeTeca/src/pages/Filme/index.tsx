import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { infoFilme } from "../../hooks/useApi"
import './style.scss'
import { Filme } from '../../hooks/tipos'
import { FaHeart, FaBookmark, FaStar, FaPlay } from 'react-icons/fa'
import { StarRating } from "../../components/rating/StarRating"



export function DetalhesFilme() {

  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const image_path_original = 'https://image.tmdb.org/t/p/original/'

  const { data: filme, isFetching } = infoFilme<Filme>('filme?id=', id)


  return (
    <>
      <Navbar />


      <div>
        {isFetching && <p>Carregando...</p>}

        <div className="container-Filme" style={{
          backgroundImage: `url(${image_path_original}${filme?.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center",
          backgroundColor: "rgba(0,0,0,0.8)", backgroundBlendMode: "darken"
        }}>
          
          
          <a><img src={`${image_path}${filme?.poster_path}`} alt="Foto de capa" /></a>

          <div className="container-infoFilme">
            <h1>{filme?.title}</h1>
            {/* <p>{filme?.vote_average}</p> */}


            <span className="lancamento">{`${filme?.release_date.slice(8, 10)}/${filme?.release_date.slice(5, 7)}/${filme?.release_date.slice(0, 4)}`}</span>

            
            <button className="btn-media" style={{marginLeft: "40px"}}><FaHeart /></button>
            <button className="btn-media"><FaBookmark /></button>
            <button className="btn-media"><FaPlay /></button>


            <div className="generos">
              {(filme?.genres)?.map(genero => {
                return (
                  <li key={genero.id.toString()}>
                    {genero.name}
                  </li>
                )
              })}
            </div>
            
            <StarRating />

            <h3 className="tagline">{filme?.tagline}</h3>


            <h2 className="title-sinopse">Sinopse</h2>
            <p className="sinopse">{filme?.overview}</p>
            <span className="diretor"><strong>Diretor:</strong> {filme?.diretor.name}</span>

          </div>
        </div>
      </div>
      <div>
        <h1>Comentarios</h1>
        
      </div>
    </>
  )
}