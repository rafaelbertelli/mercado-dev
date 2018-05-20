import React, { Component } from 'react'

import base from './base'
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      anuncios: []
    }

    base.bindToState('anuncios', { // one way data bind: update only from firebase to app
      context: this,
      state: 'anuncios',
      queries: {
        limitToLast: 3
      }
    })
  }

  render () {
    let index = 0

    return (
      <div>
        <HeaderHome />
        <div className='container'>
          <h3 className='text-center'>Últimos Anúncios</h3>
          <div className='row'>
            {Object.keys(this.state.anuncios).map(key => {
              const anuncio = this.state.anuncios[key]
              return <AnuncioHome anuncio={anuncio} id={key} key={key} />
            })}
          </div>

          <h3 className='text-center'>Categorias</h3>
          <div className='row'>
            {this.props.categorias.map((cat, indice) => {
              return [
                <LinkCategoria categoria={cat} key={indice} />,
                ++index % 4 === 0 &&
                  <div className='w-100' key={'c' + indice} />
              ]
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
