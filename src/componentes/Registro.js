import React, { useRef } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { useState, useEffect, ref } from 'react';


const Registro = () => {

  /* para habilitar la navegacion */
  let navigate = useNavigate();


  /* trer datos que ingresa el usuario */
  const usuario = useRef(null);
  const clave = useRef(null);
  const departamento = useRef(null);
  const ciudad = useRef(null);

  let campoUsuario = usuario.current.value;
  let campoClave = clave.current.value;
  let campoDepartamento = departamento.current.value;
  let campoCiudad = ciudad.current.value;
  /* con Ref saco los valores de los input -> los uso para validar que escribieron algo  y los mando a un state o 
  uso el error , setError en un state para manejar errores y lanzar un msj de error dentro de  {error && <p>Error en usuario y/o contraseña</p>}*/

const registrar = e => {





}




/* --------------------------- RETURN ----------------------- */



 return (


  <section className="registrar flex centrado">
    <div>
      <h1>
        ARCH
      </h1>
      <form action="">
        <fieldset className="flex">

          <input type="text" placeholder="Usuario" ref={usuario}/>
          <input type="text" placeholder="Password" ref={clave}/>
          <input type="text" placeholder="Departamento" ref={departamento}/>
          <input type="text" placeholder="Ciudad" ref={ciudad}/>
          {/* 
        <input type="password" placeholder="Escribir password"/>
        <input type="password" placeholder="Repetir password"/> */}
          <input type="button" value="REGISTRAME" onClick={registrar}/>

        </fieldset>

      </form>

    </div>
    {/*  <p><a href="/">Volver</a></p> */}
    <Link to="/" id='link'>Volver</Link>
  </section>

 )
}

export default Registro;