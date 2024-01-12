import React from 'react'
import './IdVisual.css'
import visual from '../assets/identidadevisual.jpg'

const IdVisual = () => {
  return (
      <div className='visual__container'>
          <div className="visual__img">
              <img src={visual} alt='' />
          </div>
          <div className="visual__title">
            <h1>Sua marca única e original!</h1>
        <p>Conheça nosso serviço de criação de identidade visual para sua empresa ou negócio.</p>
        <ul>
          <li>Identidade visual original</li>
          <li>Mockup para diversos produtos</li>
          <li>Paleta de cores da sua marca</li>
          <li>Criação de logotipo com a sua ideia</li>
          <li>Sua empresa de cara nova em todas as redes</li>
        </ul>
          </div>
    </div>
  )
}

export default IdVisual
