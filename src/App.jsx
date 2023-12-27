import './App.css';
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { CgCross } from "react-icons/cg";
import { Link } from 'react-router-dom';

function App(){

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuState, setMenuState] = useState(false)

  const openCloseMenuModal = () => {
    if(menuState){
      setIsModalOpen(false)
      setMenuState(false)
    }else{
      setIsModalOpen(true)
      setMenuState(true)
    }
  }

  return(
    <>
    <div className='header-fixo'>
      <div className='header-logo'>
        <Link to={"/"}><h2>Cantaris Coral</h2></Link>
        {/* <img className='logo' src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/04-32.png" alt="imagem-logo" /> */}
      </div>
      <div><button onClick={openCloseMenuModal} style={{cursor: "pointer"}}><FiMenu  className='menu-button'/></button></div>
    </div>
    <div className='container'>
      <div className='lista-content'>
        <ul className='lista-pages'>
          <li><Link to={"/Kits"}>KITS e PARTITURAS</Link></li>
          <li><Link to={"/Teste"}>AGENDA</Link></li>
        </ul>
      </div>
      <div className='home-footer'>
        <button className='footer-title' style={{cursor: "pointer"}}>
          <h1 style={{color: "white"}}>Conheca a história do</h1>
          <span style={{color: "red", fontSize: 45, fontWeight: 600}}>Cantaris Coral</span>
        </button>

        <div className='footer-cross'>
          <CgCross color='white' size={45} className='footer-cross'/>
        </div>

        <div className='footer-content'>
          <div className='footer-icon'>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="" />
          </div>
          <div className='footer-icon'>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    {isModalOpen && (
                <div>
                    <div className="modal">
                        <ul>
                          <li><button>Baixos</button></li>
                          <li><button>Contraltos</button></li>
                          <li><button>Sopranos</button></li>
                          <li><button>Tenores</button></li>
                          <li><button>Agenda</button></li>
                        </ul>
                    </div>
                </div>
            )}
    </>
  )
}

export default App;