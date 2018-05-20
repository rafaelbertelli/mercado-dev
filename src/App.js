import React, { Component } from 'react'
import Footer from './Footer'
import Home from './Home'
import Error404 from './Error404'
import NovoAnuncio from './NovoAnuncio'
import Categorias from './Categorias'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import base from './base'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categorias: []
    }

    base.bindToState('categorias', { // one way data bind: update only from firebase to app
      context: this,
      state: 'categorias'
    })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
            <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
            <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias} />} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
