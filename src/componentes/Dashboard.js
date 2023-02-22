
import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
let navigate = useNavigate(); 
//Se cambia history por navigate  para que el useEfect se ejecute la primera vez que se ejecuta el componente y
//cada vez que cambie navigate
   useEffect(() => {
    if (localStorage.getItem('id') === '') { 
      navigate("/");
      console.log("entre")
    }

  },[navigate]);
 




  return (
    <section className="dashboard flex centrado">

      <div>
        <h1>
          ARCH
        </h1>
        <article>
          <p>agregar gasto</p>
        </article>
        <article>
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
        </article>


      </div>


      <Link to="/">Volver</Link>
    </section>

  )
}

export default Dashboard;