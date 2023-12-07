import '../App.css';
import React from 'react';
import { FiMenu } from "react-icons/fi";

function Kits(){

return(
    <>
     <div className='header-fixo'>
      <div className='header-logo'>
        <h2>Cantaris Coral</h2>
        {/* <img className='logo' src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/04-32.png" alt="imagem-logo" /> */}
      </div>
      <div><button><FiMenu  className='menu-button'/></button></div>
    </div>
    </>
)
}

export default Kits;