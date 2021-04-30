import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Favorites from './components/Favorites';
import Intro from './components/Intro';
import Contact from './components/Contact';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js'
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  

  return (
    <>
      <Header />
      <div id="main">
        <Intro />
        <Favorites />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Home

