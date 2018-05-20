import React from 'react'
import { Link } from 'react-router-dom'

const AnuncioHome = (props) => {
  return (
    <div className='col-lg-4 col-md-6 mb-4'>
      <div className='card h-100'>
        <Link to={`/categorias/${props.anuncio.categoria}/${props.id}`}>
          <img className='card-img-top' src={props.anuncio.foto} alt={props.anuncio.nome} />
        </Link>
        <div className='card-body'>
          <h4 className='card-title'>
            <a to={`/anuncios/ver/`}>{props.anuncio.nome}</a>
          </h4>
          <h5>{props.anuncio.preco}</h5>
          <p className='card-text'>{props.anuncio.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default AnuncioHome
