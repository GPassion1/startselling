import React from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import Ecommerce from './components/Ecommerce/Ecommerce'
import Footer from './components/Footer/Footer'
import FaleConosco from './components/FaleConosco/FaleConosco'
import SocialMedia from './components/SocialMedia/SocialMedia'

function App() {

  return (
    <>
      <Header />
      <MainBanner />
      <Ecommerce />
      <SocialMedia />
      <Ecommerce />
      <FaleConosco />
      <Footer />
    </>
  )
}

export default App
