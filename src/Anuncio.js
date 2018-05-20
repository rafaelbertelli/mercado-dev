import React, { Component } from 'react'
import Axios from 'axios'

class Anuncio extends Component {
  constructor (props) {
    super(props)

    this.state = {
      anuncios: {},
      isLoading: true
    }

    this.setState({
      isLoading: true
    })

    const id = this.props.match.params.idAnuncio
    const url = `https://mercadodev-4117f.firebaseio.com/anuncios/${id}.json`
    console.log('load anuncios', url)
    Axios
      .get(url)
      .then(res => {
        const anuncios = res.data
        this.setState({
          anuncios: anuncios,
          isLoading: false
        })
        console.log(anuncios)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const anuncio = this.state.anuncios
    console.log(anuncio)
    const nome = anuncio.nome || 'Item anunciado'

    if (this.state.isLoading) {
      return (
        <div className='w-100 text-center'>
          <i class='fa fa-spinner fa-5x' />
        </div>
      )
    }

    return (
      <div>
        <h2 className='text-center'>{nome}</h2>
        <img src={anuncio.foto} alt={anuncio.nome} className='img-fluid' />
      </div>
    )
  }
}

export default Anuncio
