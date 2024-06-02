import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Imagem em Assets
import day from './assets/img1.jpg';

//  useState  
import Data from './components/Data';
import ListRender from './components/ListRender';

function App() {

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em Public */}
          <img src="/city.jpg" alt="Alguma imagem" />
          {/* Imagem em Assets */}
          <img src={day} alt="Outra imagem" />
          {/* useState */}
          <Data />
          {/* Render de Lista */}
          <ListRender />
      </div>
    </>
  )
}

export default App
