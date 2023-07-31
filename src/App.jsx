import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Character from './Character'
import Navbar from './Navbar'
import Location from './Location'
import Episodes from './Episodes'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/character/:id' Component={Character} />
        <Route path='/location' Component={Location} />
        <Route path='/episodes' Component={Episodes} />
      </Routes>
      <footer class="py-4 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Rick and Morty API</p>
        </div>
      </footer>
    </>
  )
}

export default App