import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { infoFilme } from "../../hooks/useApi"
import './style.scss'
import { Filme } from '../../hooks/tipos'
import ReactStars from "react-rating-stars-component"
import { FaHeart, FaBookmark, FaStar, FaPlay } from 'react-icons/fa'
import { StarRating } from "../../components/rating/StarRating"



export function DetalhesFilme() {

  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const image_path_original = 'https://image.tmdb.org/t/p/original/'

  const { data: filme, isFetching } = infoFilme<Filme>('filmes/procurar?id_filme=', id)


  return (
    <>
      <Navbar />


      <div>
        {isFetching && <p>Carregando...</p>}

        <div className="container-Filme" style={{
          backgroundImage: `url(${image_path_original}${filme?.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center",
          backgroundColor: "rgba(0,0,0,0.8)", backgroundBlendMode: "darken",
        }}>
          
          
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
            
            <StarRating />

            <button className="btn-media"><FaHeart /></button>
            <button className="btn-media"><FaBookmark /></button>
            <button className="btn-media"><FaStar /></button>



            <h2 className="title-sinopse">Sinopse</h2>
            <p className="sinopse">{filme?.overview}</p>

          </div>
        </div>
      </div>
      <div>
        <h1>Comentarios</h1>
        
      </div>
    </>
  )
}