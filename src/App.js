import React, { Component } from 'react'
import Footer from './Footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import base from './base'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      categorias: []
    }
      
    base.bindToState('categorias', { // one way data bind: update only from firebase to app
      context: this,
      state: 'categorias'
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
