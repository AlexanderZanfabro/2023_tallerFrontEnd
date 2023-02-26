
import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AgregarGastos from './AgregarGastos';
import AgregarIngreso from './AgregarIngreso';
import ListadoDeMovimientos from './ListadoDeMovimientos';
import MontosTotales from './MontosTotales';

const Dashboard = () => {
let navigate = useNavigate(); 
//Se cambia history por navigate  para que el useEfect se ejecute la primera vez que se ejecuta el componente y
//cada vez que cambie navigate
   useEffect(() => {
    if (localStorage.getItem('id') === '' || localStorage.getItem('userid') === '') { 
      navigate("/");
      console.log("entre")
    }

  },[navigate]);
 




  return (
    <section className="dashboard flex centrado">

      <div>
        <h1 className='tituloApp'>
          ARCH
        </h1>
        <div>
          <AgregarGastos/>
        </div>
        <div>
          <AgregarIngreso/>
        </div>
        <div>
          <ListadoDeMovimientos/>
        </div>
        <div>
          <MontosTotales/>
        </div>


      </div>


     <p><Link to="/">Volver</Link></p> 
    </section>

  )
}

export default Dashboard;