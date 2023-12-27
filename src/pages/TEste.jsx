import '../App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Teste(){

    const Player = () => (
        <AudioPlayer
          header = "Nome da Música"
          showFilledVolume
          progressJumpStep={15000}
          src="Bem Vindo Ao Lar mix 3.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      );

return(
    <>
     <div className='header-fixo'>
      <div className='header-logo'>
        <Link to={"/"}><h2>Cantaris Coral</h2></Link>
        {/* <img className='logo' src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/04-32.png" alt="imagem-logo" /> */}
      </div>
      <div><button><FiMenu  className='menu-button'/></button></div>
    </div>
    <div className='container'>

      <h1 style={{marginTop: 10}}>KITS</h1>
      <div style={{
                boxSizing: "border-box",
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1,
                width: '60%',
                padding: '10px 15px',
                boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                marginTop: '8px'
                }}>
       {Player()}
      </div>
        
    </div>
    </>
)
}

export default Teste;