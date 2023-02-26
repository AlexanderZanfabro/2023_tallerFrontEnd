import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const AgregarGastos = () => {


  /* useRef */
  const descripcionGasto = useRef("");
  const totalGasto = useRef("");
  const datoFecha = useRef("");

  /* useState */
  const [idRubro, setIdRubro] = useState("");
  const [rubros, setRubros] = useState("");
  const [medioDePago, setMedioDePago] = useState();
  /* otros */
  let idUsuarioLocalStorage = localStorage.getItem("userId");
  /* la funcion filter daba error -> decia que no era una funcion ??? */
 /*  const rubrosFiltrados = rubros.filter(valor => valor.id < 7); */
 /*  const algo = rubros.filter(function(r){
    return r.id < 7;
  }) */


  /* useEffect */
  useEffect(() => {
    obtenerRubros();
  }, []);



  /* fetch para obtener rubros */
  const obtenerRubros = () => {
    fetch("https://dwallet.develotion.com/rubros.php", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': (localStorage.getItem("apiKey"))
      }
    })
      .then(r => r.json())
      .then(datosRubros => {
        console.log(datosRubros.rubros);
        setRubros(datosRubros.rubros);

      });


  }

  /* funcion para ingresar los gastos */


  const ingresarGasto = e => {

    const data = {
      idUsuario: idUsuarioLocalStorage,
      concepto: descripcionGasto,
      categoria: idRubro,
      total: totalGasto,
      medio: medioDePago,
      fecha: datoFecha,
    }
    /*  const data3 = {idUsuarioLocalStorage,descripcionGasto,idRubro,80,fecha} */

    fetch('https://dwallet.develotion.com/movimientos.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: (localStorage.getItem("apiKey")),
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data2) => {
        console.log('Success:', data2)


      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

 
  

  /* return del componente */

  return (
    <div>

<h1>Agregar gastos</h1>
      <section className="registrar flex centrado">
        <div>
         
          <form action="">
            <fieldset className="flex">
                
              <input type="text" placeholder="Descripción del gasto" ref={descripcionGasto} />
              <input type="number" placeholder="Ingresar gasto" ref={totalGasto} />
              <input type="texto" placeholder="Ingresar fecha como texto (YYY-MM-dd)" ref={datoFecha} />

              {/* select de rubros */}
              {/* {rubros !== '' ? (
                <select
                  name="slc-rubros"
                  className="slc-rubros"
                  onChange={(e) => {
                    const RubroSeleccionado = e.target.value
                    setRubros(RubroSeleccionado);

                  }}
                >
                  <option key={0} value={0}>
                    Seleccione un rubro
                  </option>

                  {rubros && rubros.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              ) : (
                <select name="slc-rubros" className="slc-rubros">
                  <option key={-1} value={0}>
                    {'No hay rubros'}
                  </option>
                </select>
              )} */}

              {rubros !== '' ? (
                <select
                  name="slc-rubros"
                  className="slc-rub"
                  onChange={(e) => {
                    const idRubroSeleccionado = e.target.value
                    setIdRubro(idRubroSeleccionado)
                  }}
                >
                  <option key={0} value={0}>
                    Seleccione un rubro
                  </option>

               
                  { rubros && rubros.filter(r => r.id < 7).map((item, index) => (

                   
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              ) : (
                <select name="slc-rubros" className="slc-rub">
                  <option key={-1} value={0}>
                    {'No hay rubros'}
                  </option>
                </select>
              )}



              <select
                name="slc-medioDePago"
                className="slc-medioDePago"
                onChange={(e) => {
                  const medioDePagoSelecionado = e.target.value
                  setMedioDePago(medioDePagoSelecionado);

                }}
              >
                <option key={0} value={0}>
                  Seleccione un medio de pago
                </option>
                <option key={1} value={"Efectivo"}>
                  Efectivo
                </option>
                <option key={2} value={"Devito"}>
                  Dévito
                </option>
                <option key={3} value={"Credito"}>
                  Crédito
                </option>

              </select>


              {/* <input type="number" placeholder="Departamento" ref={departamento} /> */}
              {/* <input type="number" placeholder="Ciudad" ref={ciudad} /> */}

              <input type="button" value="INGRESAR" onClick={ingresarGasto} />

            </fieldset>

          </form>
          {/*  {error && <p>Error</p>}
    {isregistro && <p>Registro exitoso!</p>}{/* si reenvia no muestra msj? } */}
        </div>

        {/* <Link to="/" id='link'>Volver</Link> */}
      </section>


    </div>
  )
}



export default AgregarGastos;