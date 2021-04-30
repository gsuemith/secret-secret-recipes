import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Favorites from './components/Favorites';
import Intro from './components/Intro';
import Contact from './components/Contact';

const Home = () => {

  return (
      <>
        <Intro />
        <Favorites />
        <Contact />
      </>
  )
}

export default Home

