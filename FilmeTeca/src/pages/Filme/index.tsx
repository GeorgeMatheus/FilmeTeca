import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar/Navbar"
import { infoFilme } from "../../hooks/useApi"
import './style.scss'
import { Filme, Data } from '../../hooks/tipos'
import { FaHeart, FaBookmark, FaStar, FaPlay } from 'react-icons/fa'
import { StarRating } from "../../components/rating/StarRating"
import userImg from "../../assets/imagem_perfil.png"



export function DetalhesFilme() {

  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const image_path_original = 'https://image.tmdb.org/t/p/original/'

  const { data: filme, isFetching } = infoFilme<Filme>('filme/', id)



  return (
    <>
      <Navbar />


      <div>
        {isFetching && <p>Carregando...</p>}

        <div className="container-Filme" style={{
          backgroundImage: `url(${image_path_original}${filme?.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundColor: "rgba(0,0,0,0.8)", backgroundBlendMode: "darken"
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
            
            <h3 className="tagline">{filme?.tagline}</h3>

            
            <div className="btn-media">

              <div>
                {/* <span className="btn-tooltip">Favoritar esse filme</span> */}
                <button className="btn" data-tooltip="Favoritar esse filme"><i><FaHeart /></i></button>
              </div>

              <div>
                {/* <span className="btn-tooltip">Adicionar a lista</span> */}
                <button className="btn" data-tooltip="Adicionar a Lista"><i><FaBookmark /></i></button>
              </div>

              <div>
                {/* <span className="btn-tooltip">Reproduzir trailer</span> */}
                <button className="btn" data-tooltip="Reproduzir trailer"><i><FaPlay /></i></button>
              </div>

              

            </div>

            <h2 className="title-sinopse">Sinopse</h2>
            <p className="sinopse">{filme?.overview}</p>
            <span className="diretor"><strong>Diretor:</strong> {filme?.diretor.name}</span>

          </div>
        </div>
      </div>
      <div className="container-comentarios">
        <div className="area-principal">
          <div className="cabecalho-comentarios">
            <h1>Comentários</h1>
          
            <span className="qtd-comentarios">{filme?.comentarios.length} Comentários</span>
          </div>

          <form className="novo-comentario">
            <div>
              {/* <img src={userImg} alt="imagem de perfil"/> */}
              <textarea rows={5} name="" id="" placeholder="Participe da discussão..." />
            </div>
            <button>Comentar</button>
          </form>
      
          <div className="comentarios">

            {(filme?.comentarios)?.map(comentario => {
              return (
                <li key={comentario.texto}>
                  
                  <div className="usuario-comentario">
                    <img src={userImg} alt="imagem de perfil"/>

                    <div>
                      <a href="#" className="nome-usuario">{comentario.user.nome}</a>
                      <span className="data-comentario">{`${comentario.data.slice(8,10)}/${comentario.data.slice(5,7)}/${comentario.data.slice(0,4)}`}</span>
                      <span className="hora-comentario">{`${comentario.data.slice(11,16)}`}</span>
                      <p className="comentario">{comentario.texto}</p>
                    </div>

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