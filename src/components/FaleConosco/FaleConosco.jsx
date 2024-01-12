import React from 'react'
import './FaleConosco.css'

export const FaleConosco = () => {
  return (
      <div className='newsletter'>
          <div className="newsletter__text">
            <h4>Faça seu orçamento aqui!</h4>
            <p>Cadastre seu e-mail para um <span>orçamento especializado.</span></p>
        </div>
        <div className="formulario">
            <div className="input-group">
                <input className="input" required type="text" id="username" />
                <label className="label" for="username">Nome</label>
            </div>    
            <div className="input-group__email">    
                <input className="input__email" required type="text" id="email" />
                <label className="label__email" for="email">E-mail</label>
            </div>    
                <button className="normal">Cadastrar</button>
        </div>
    </div>
  )
}

export default FaleConosco
