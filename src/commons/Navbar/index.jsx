import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './navBar.css'

// agregado por mi

import { Link, useNavigate } from 'react-router-dom';
import Registro from '../../componentes/Registro';
// fin agregado por mi

import logo from './logo.svg'

const Navbar = () => {
  const [urlBase] = useState('http://localhost:3000/')
    // Agregado
    let navigate = useNavigate();

    function handleClickRegistro(){
        navigate('Registro');
    }

    function handleClickLogin(){
        navigate('/');
    }
    // fin agregado

  return (
    <div>
      {localStorage.getItem('userId') === '' ? (
        <nav>
          <div className="logo">
            <img src={logo} className="App-logo" alt="Logo" />
          </div>
         
          <ul className="nav-links">
            <li>
              <button
                className="login-button"
                onClick={handleClickLogin}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="join-button"
                 onClick={handleClickRegistro}
              >
                Registro
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <div className="logo">
            <img src={logo} className="App-logo" alt="Logo" />
          </div>
          <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-links">
            <li>
                {/* Agrego el link aca */}
            <Link to="/" id='link'>Home</Link>
            {/* <a href={urlBase}>Home</a> */}
            </li>

            <li>
              <button
                className="join-button"
                onClick={() => {
                  localStorage.setItem('userId', '')
                  localStorage.setItem('apiKey', '')
                //   para navegar al login
                  navigate('/');
                }}
              >
                LogOut
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Navbar
