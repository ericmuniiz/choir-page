import './App.css';
import React from 'react';
import { FiMenu } from "react-icons/fi";

function App(){

  return(
    <>
    <div className='header-fixo'>
      <div className='header-logo'>
        <h2>Cantaris Coral</h2>
        {/* <img className='logo' src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/04-32.png" alt="imagem-logo" /> */}
      </div>
      <div><button><FiMenu  className='menu-button'/></button></div>
    </div>
    <div className='container'>
      <div className='lista-content'>
        <ul className='lista-pages'>
          <li><button>KITS e PARTITURAS</button></li>
          <li><button>AGENDA</button></li>
        </ul>
      </div>
      <div className='home-footer'></div>
    </div>
    </>
  )
}

export default App;