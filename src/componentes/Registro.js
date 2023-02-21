import React from 'react'
import { Link } from 'react-router-dom';


const Registro = () => {
  return (
   

  <section className="registrar flex centrado">
  <div>
    <h1>
      ARCH
    </h1>
    <form action="">
      <fieldset className="flex">
       
        <input type="text" placeholder="Usuario"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Departamento"/>
        <input type="text" placeholder="Ciudad"/>
{/* 
        <input type="password" placeholder="Escribir password"/>
        <input type="password" placeholder="Repetir password"/> */}
        <input type="button" value="REGISTRAME"/>

      </fieldset>

    </form>

  </div>
 {/*  <p><a href="/">Volver</a></p> */}
  <Link to="/" id='link'>Volver</Link>
</section>

  )
}

export default Registro;