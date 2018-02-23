import React, { Component } from 'react'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import base from './base'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      categorias: [],
      anuncios: []
    }
    base.bindToState('categorias', { // one way data bind: from firebase to app
      context: this,
      state: 'categorias'
    })
    base.bindToState('anuncios', { // one way data bind: from firebase to app
      context: this,
      state: 'anuncios',
      queries: {
        limitToLast: 3
      }
    })
  }

  render() {
    let index = 0;

    return (
      <div className="App">

        <HeaderHome />

        <div className="container">
          <h3 className="text-center">Últimos Anúncios</h3>
          <div className="row">
          { this.state.anuncios.map( (anun, indice) => {
            return <AnuncioHome anuncio={anun} key={indice} />
          })}
          </div>

          <h3 className="text-center">Categorias</h3>
          <div className="row">
            { this.state.categorias.map( (cat, indice) => {
              return [ <LinkCategoria categoria={cat} key={indice} />, ++index%4 === 0 && <div className="w-100" key={"c"+indice}></div> ]
            })}
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

export default App;
