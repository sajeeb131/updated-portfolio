import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from './parts/header/Header'
import About from './parts/about/About'
import Project from './parts/projects/Project'
import './style.css'
const Home = () => {
  return (
    <main>
        <Navbar />
        <div className='px-20 py-12 flex flex-col gap-28 home-elements'> 
          <Header />
          {/* <About/>
          <Project/> */}
        </div>
    </main>
  )
}

export default Home