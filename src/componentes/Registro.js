import React, { useRef } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { useState, useEffect, ref } from 'react';


const Registro = () => {

  /* para habilitar la navegacion */
  let navigate = useNavigate();


  /* trer datos que ingresa el usuario */
  const usuario1 = useRef(null);
  const clave = useRef(null);
  const departamento = useRef(null);
  const ciudad = useRef(null);


  
  const [error, setError] = useState(false);
 
  const[mensajeError, setMensajeError] = useState('');
  



  const [passwordError, setPasswordError] = useState(false)
  const [usuarioError, setUsuarioError] = useState(false)
  const [isregistro, setIsregistro] = useState(false)
  const [hasError, setHasError] = useState(false)



  /* con Ref saco los valores de los input -> los uso para validar que escribieron algo  y los mando a un state o 
  uso el error , setError en un state para manejar errores y lanzar un msj de error dentro de  {error && <p>Error en usuario y/o contraseña</p>}*/

const registrar = e => {

/* 
  let campoUsuario = usuario.current.value;
  let campoClave = clave.current.value;
  let campoDepartamento = departamento.current.value;
  let campoCiudad = ciudad.current.value;
 */


  let usuario = usuario1.current.value;
  let password = clave.current.value;
  let idDepartamento = departamento.current.value;
  let idCiudad = ciudad.current.value;


  const datos = {usuario, password, idDepartamento , idCiudad};
  console.log(datos);

/* CAMBIE LOS NOMBRES DE LAS VARIABLES QUE RECIBEN LOS DATOS DE LOS CAMPOS DE REGISTRO PARA QUE COINCIDAN CON  LOS QUE REQUIERE LA API
   AHORA SE PRESENTA UN ERROR DE RUTAS */

 /*  console.log('Success:', dato) */
/*   data.codigo === 200 && setIsLogin(true)
  data.codigo === 200 && localStorage.setItem('apiKey', data.apiKey)
  data.codigo === 200 && localStorage.setItem('userId', data.id)
  data.codigo === 200 && history.push('./')
  data.codigo !== 200 && setHasError(true) */


  fetch("https://dwallet.develotion.com/usuarios.php", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),

   /* 
    "usuario": {campoUsuario},
    "password":{campoClave},
    "idDepartamento":{campoDepartamento},
    "idCiudad": {campoCiudad} */

    
  


  })

    .then(r => r.json())
    .then(datosRetorno => {
      console.log('Success:', datosRetorno);
      datosRetorno.codigo === 200 && localStorage.setItem('apiKey', datosRetorno.apiKey);
      datosRetorno.codigo === 200 && localStorage.setItem('userId', datosRetorno.id);
      datosRetorno.codigo === 200 && navigate("../Dashboard");
      datosRetorno.codigo !== 200 && setError(true);
      datosRetorno.codigo === 200 && setIsregistro(true)
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsregistro(false);
      setError(true);

    })



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

          <input type="text" placeholder="Usuario" ref={usuario1}/>
          <input type="text" placeholder="Password" ref={clave}/>
          <input type="number" placeholder="Departamento" ref={departamento}/>
          <input type="number" placeholder="Ciudad" ref={ciudad}/>
          {/* 
        <input type="password" placeholder="Escribir password"/>
        <input type="password" placeholder="Repetir password"/> */}
          <input type="button" value="REGISTRAME" onClick={registrar}/>

        </fieldset>

      </form>
      {error && <p>Error</p>}
      {isregistro && <p>Registro exitoso!</p>}{/* si reenvia no muestra msj? */}
    </div>
       {/*  <p><a href="/">Volver</a></p> */}
    <Link to="/" id='link'>Volver</Link>
  </section>

 )
}

export default Registro;