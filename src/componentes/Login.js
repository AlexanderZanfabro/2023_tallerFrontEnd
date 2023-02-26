import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


const Login = () => {

  const user = useRef(null);
  const pass = useRef(null);

  let navigate = useNavigate();
/* 
  const [datosUsuario, setDatosUsuario] = useState(''); */

  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const[mensajeError, setMensajeError] = useState(false);




    useEffect( () => {
      
    })
 /*  useEffect(() => {
    if (localStorage.getItem("usuario") !== '') {
      navigate("Dashboard");
    }


  }, []); */
 
  /* const dataEnvio = {'dwallet2', 'dwallet2'}; */




  const loginApp = e => {
    let campoUser = user.current.value;
    let campoPass = pass.current.value;
    
    (campoUser == '')? setError(true) :setError(false);

    const datos = { campoUser, campoPass }
    console.log(datos);

   /*  console.log('Success:', dato) */
  /*   data.codigo === 200 && setIsLogin(true)
    data.codigo === 200 && localStorage.setItem('apiKey', data.apiKey)
    data.codigo === 200 && localStorage.setItem('userId', data.id)
    data.codigo === 200 && history.push('./')
    data.codigo !== 200 && setHasError(true) */


    fetch("https://dwallet.develotion.com/login.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })

      .then(r => r.json())
      .then(datosRetorno => {
        console.log('Success:', datosRetorno);
        datosRetorno.codigo === 200 && localStorage.setItem('apiKey', datosRetorno.apiKey);
        datosRetorno.codigo === 200 && localStorage.setItem('userId', datosRetorno.id);
        datosRetorno.codigo === 200 && navigate("Dashboard");
        datosRetorno.codigo !== 200 && setError(true);
        datosRetorno.codigo !== 200 && setMensajeError(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLogin(false);
        setError(true);

      })




  }


/* 
  function handleChange(name, value) {
    if (name === 'usuario') {
      //variable para almacenar
      setusuario(value)
      setHasError(false)
    } else {
      if (value.length < 0) {
        setPasswordError(true)
        setHasError(false)
      } else {
        setPasswordError(false)
        setPassword(value)
        setHasError(false)
      }
    }
  } */



  /* 
      if (campoUser === "datos.usuario" && campoPass === "datos.password") {
          localStorage.setItem("usuario", campoUser);
          navigate("Dashboard");
      } else {
          setError(true);
      } */






return (
  <>
    <section className="login flex centrado">
      <div>
        <h1 className='tituloApp'>
          ARCH
        </h1>
        <form action="">

          <input type="text" placeholder="Username" ref={user} />
          <input type="password" placeholder="Password" ref={pass} />
          <input type="button" value="Login" onClick={loginApp} />

        </form>
        <div>
          <p>¿No tienes cuenta? </p>
         {/* cambio el ancla por link par que no refresque la pagina */}
          <p> <Link to="/Registro" id='link'>Registrate</Link></p>
        </div>
      </div>
        {error && <p> ERROR DE USUARIO O PASSWORD</p>}
        { mensajeError && <p /* className='mensaje-error' */>{mensajeError}</p>}
      {/*  <Link to="/">Volver</Link> */}
    </section>

  </>

)

}
export default Login;