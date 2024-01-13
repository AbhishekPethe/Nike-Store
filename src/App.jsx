import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Stories from './components/Stories'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/cart'


function App() {
  return (
    <Provider store={store} >
      <Navbar />
      <Hero />
      <Popular />
      <TopRated />
      <Stories />
      <Footer />
      <Cart />
    </Provider>
  )
}

export default App
