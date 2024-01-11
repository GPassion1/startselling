import React from 'react'
import './Ecommerce.css'
import ecommerce from '../assets/webpages.jpg'

const Ecommerce = () => {
  return (
      <div className='ecommerce__container'>
          <div className="ecommerce__img">
              <img src={ecommerce} alt='' />
          </div>
          <div className="title">
            <h1>E-commerce prático e seguro!</h1>
        <p>A Start Selling cria, gerencia e mantém o seu e-commerce seguro e funcional com as tecnologias mais modernas para e-commerce e pagamentos on-line</p>
        <ul>
          <li>Gerenciamento de SEO</li>
          <li>Cadastro de clientes</li>
          <li>Pagamento online</li>
          <li>Segurança e rapidez</li>
          <li>Gerenciamento de entregas</li>
        </ul>
          </div>
    </div>
  )
}

export default Ecommerce