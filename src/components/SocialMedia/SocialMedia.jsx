import React from 'react'
import './SocialMedia.css'
import socialmedia from '../assets/social_media.png'

const SocialMedia = () => {
  return (
      <div className='socialmedia__container'>
          
        <div className="socialmedia__title">
            <h1>Apareça e venda pelas redes sociais!</h1>
            <p>Seus produtos conectados com as pessoas pelas mídias sociais aparecem de verdade e vendem muito mais.</p>
            <ul>
            <li>Gerenciamento de SEO</li>
            <li>Cadastro de clientes</li>
            <li>Pagamento online</li>
            <li>Segurança e rapidez</li>
            <li>Gerenciamento de entregas</li>
            </ul>
          </div>
          <div className="socialmedia__img">
              <img src={socialmedia} alt='' />
          </div>
    </div>
  )
}

export default SocialMedia