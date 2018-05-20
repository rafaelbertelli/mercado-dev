import React, { Component } from 'react'
import Axios from 'axios'

import AnuncioHome from './AnuncioHome'

class Categoria extends Component {
  constructor (props) {
    super(props)

    this.state = {
      anuncios: {},
      err: '',
      isLoading: true
    }

    this.loadAnuncios = this.loadAnuncios.bind(this)
    this.loadAnuncios(this.props.match.params.urlCategoria)

    console.log('construtor', this.props.match.params.urlCategoria)
  }

  loadAnuncios (urlCategoria) {
    this.setState({
      isLoading: true,
      anuncios: {}
    })

    const url = `https://mercadodev-4117f.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
    console.log('load anuncios', url)
    Axios
      .get(url)
      .then(res => {
        const anuncios = res.data
        console.log(anuncios)

        this.setState({ anuncios: anuncios })
        this.categoria = urlCategoria
        console.log('axios', res.data)

        this.setState({
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({ err: err })
        console.log(err)
      })
  }

  componentWillReceiveProps (newProps) {
    if (newProps.match.params.urlCategoria && newProps.match.params.urlCategoria !== this.categoria) {
      this.loadAnuncios(newProps.match.params.urlCategoria)
    }
  }

  render () {
    return (
      <div>
        <div className='row'>
          <h2>&nbsp;</h2>
        </div>
        <div className='row'>

          {
            this.state.isLoading &&
              <div className='w-100 text-center'>
                <i class='fa fa-spinner fa-5x' />
              </div>
          }

          {
            !this.state.isLoading &&
              Object.keys(this.state.anuncios).length === 0 &&
                <p>Nenhum produto cadastrado</p>
          }

          {Object.keys(this.state.anuncios).map(key => {
            const anuncio = this.state.anuncios[key]
            return <AnuncioHome anuncio={anuncio} id={key} key={key} />
          })}
        </div>
      </div>
    )
  }
}

export default Categoria
