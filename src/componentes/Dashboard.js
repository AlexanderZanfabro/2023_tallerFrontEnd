
import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AgregarGastos from './AgregarGastos';
import AgregarIngreso from './AgregarIngreso';


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
      {/*   <article>
          <p>agregar ingreso</p>
        </article>
        <article>
          <p>listado de movimientos</p>
        </article>
        <article>
          <p>Montos totales</p>
        </article>
        <article>
          <div>grafica</div>
        </article>
        <article>
          <div>grafica</div>
        </article>
        <article>
          <div>grafica</div>
        </article> */}


      </div>


     <p><Link to="/">Volver</Link></p> 
    </section>

  )
}

export default Dashboard;