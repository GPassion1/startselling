import React from 'react'
import './Seo.css'
import seo from '../assets/seo.jpg'

const Seo = () => {
  return (
      <div className='seo__container'> 
        <div className="seo__title">
            <h1>Gerenciamento de SEO!</h1>
            <p>Quantas vezes sua marca é vista na internet? O nosso serviço de gerenciamento de SEO analisa suas métricas de visibilidade, acessos e tráfego. E entregamos os resultados e soluções de forma simples e compreensível.</p>
            <ul>
            <li>Gerenciamento de SEO</li>
            <li>Cadastro de clientes</li>
            <li>Pagamento online</li>
            <li>Segurança e rapidez</li>
            <li>Gerenciamento de entregas</li>
            </ul>
          </div>
          <div className="seo__img">
              <img src={seo} alt='' />
          </div>
    </div>
  )
}

export default Seo
