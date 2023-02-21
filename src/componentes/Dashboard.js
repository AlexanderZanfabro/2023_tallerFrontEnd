
import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {


 let navigate = useNavigate(); 

 console.log('dddddd')

   useEffect(() => {
    if (localStorage.getItem('id') === null) { 
      
      navigate("./");
      console.log('kkkkkk')
    }

    console.log('afuera')
  },[]);
 




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