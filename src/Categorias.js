import React from 'react'
import { Link, Route } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Anuncio from './Anuncio'

const Categorias = props => {
  return (
    <div>
      <HeaderInterno />
      <div className='container' style={{ paddingTop: '120px' }}>
        <div className='row'>
          <div className='col-sm-4'>
            <h2>Categorias</h2>
            <ul>
              {props.categorias.map((cat, i) =>
                <li key={i}>
                  <Link to={`/categorias/${cat.url}`} >{cat.categoria}</Link>
                </li>
              )}
            </ul>
          </div>
          <div className='col-sm-8'>
            <Route path={'/categorias/:urlCategoria'} exact component={Categoria} />
            <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props) => <Anuncio {...props} />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorias
