
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, ref, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSecondSelect } from "./Registro";



const Registro = () => {



  /* para habilitar la navegacion */
  let navigate = useNavigate();

  /*  */
  const dispatch = useDispatch();


  /* useState */
  const [departamentos, setDepartamentos] = useState("");
  const [idDepartamentos, setidDepartamentos] = useState(0);
  /*  */
  const [ciudades, setCiudades] = useState("");
  const [idCiudad, setIdCiudad] = useState(0);
  /*  */

  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');


  const [passwordError, setPasswordError] = useState(false)
  const [usuarioError, setUsuarioError] = useState(false)
  const [isregistro, setIsregistro] = useState(false)
  const [hasError, setHasError] = useState(false)


  /* useEffect */
  useEffect(() => {
    obtenerDepartamentos();
  }, []);



  /* usar un fetch para traer los departamentos y despues pasar el seleccionado a otro para buscar la ciudad */
  const obtenerDepartamentos = () => {
    fetch("https://dwallet.develotion.com/departamentos.php", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(r => r.json())
      .then(datosDepartamentos => {
        console.log(datosDepartamentos.departamentos);
        setDepartamentos(datosDepartamentos.departamentos);

      });


  }

  //#region (fetch ciudades)

  /* fetch de obtener ciudades */
  const obtenerCiudades = (idDepartamentos) => {
    fetch("https://dwallet.develotion.com/ciudades.php?idDepartamento=${idDepartamentos}", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(r => r.json())
      .then(datosCiudades => {
        console.log(datosCiudades.ciudades);
        setCiudades(datosCiudades.ciudades);

      });

  }
  //#endregion

/* 
const handleFirstSelectChange = () => { */

  /* creo que para usar useSelector tengo que vincular con el store de redux
    para usar useDispatch
  */
/* } */







/* 
  const handleDepartamentoChange = (e) => {
    const idDepartamentoSeleccionado = e.target.value;
    setIdDepartamentos(idDepartamentoSeleccionado);
    obtenerCiudades(idDepartamentoSeleccionado);
  } */





    /* trer datos que ingresa el usuario */
    const usuario1 = useRef(null);
    const clave = useRef(null);
    /* const departamento = useRef(null); */
    /*  const ciudad = useRef(null); */

    /* con Ref saco los valores de los input -> los uso para validar que escribieron algo  y los mando a un state o 
    uso el error , setError en un state para manejar errores y lanzar un msj de error dentro de  {error && <p>Error en usuario y/o contraseña</p>}*/


    const registrar = e => {
      let usuario = usuario1.current.value;
      let password = clave.current.value;
      /*  let idDepartamento = departamento.current.value; */
      /*  let idCiudad = ciudad.current.value; */


      const datos = { usuario, password, idDepartamentos, idCiudad };
      console.log(datos);


      fetch("https://dwallet.develotion.com/usuarios.php", {
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

              <input type="text" placeholder="Usuario" ref={usuario1} />
              <input type="text" placeholder="Password" ref={clave} />
              {/* select de departamentos */}
              {departamentos !== '' ? (
                <select
                  name="slc-departamentos"
                  className="slc-dep"
                  onChange={(e) => {
                    const idDepartamentoSeleccionado = e.target.value
                    setidDepartamentos(idDepartamentoSeleccionado);
                    /*  handleFirstSelectChange */
                  }}
                >
                  <option key={0} value={0}>
                    Seleccione un departamento
                  </option>

                  {departamentos && departamentos.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              ) : (
                <select name="slc-departamentos" className="slc-departamentos">
                  <option key={-1} value={0}>
                    {'No hay departamentos'}
                  </option>
                </select>
              )}

              {/* select de ciudades */}
              {ciudades !== '' ? (
                <select /* value={firstSelectValue} */
                  name="slc-ciudades"
                  className="slc-city"
                  onChange={(e) => {
                    const idCiudadSeleccionada = e.target.value
                    setIdCiudad(idCiudadSeleccionada);
                   
                  }}
                >
                  <option key={0} value={0}>
                    Seleccione una ciudad
                  </option>

                  {ciudades && ciudades.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              ) : (
                <select /* value={secondSelectValue} */ name="slc-ciudades" className="slc-city">
                  <option key={-1} value={0}>
                    {'No hay ciudad'}
                  </option>
                </select>
              )}
              {/* <input type="number" placeholder="Departamento" ref={departamento} /> */}
              {/* <input type="number" placeholder="Ciudad" ref={ciudad} /> */}

              <input type="button" value="REGISTRAME" onClick={registrar} />

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