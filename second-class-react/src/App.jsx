import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css'


function App(){
  return(
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  )
}

export default App;