import React from 'react'
import { useState, useEffect } from 'react';


const ListadoDeMovimientos = () => {

    /* useEstate */
    const [movimientos, setMovimientos] = useState(null);
    /*  console.log('los mov que',movimientos); */

    /* useEffect */
    useEffect(() => {
        listarLosMovimientos();

    }, [])


    const listarLosMovimientos = e => {

        fetch("https://dwallet.develotion.com/movimientos.php?idUsuario=3", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': (localStorage.getItem("apiKey"))
            }
        })
            .then(r => r.json())
            .then(datosMovimientos => {
                console.log(datosMovimientos);
                setMovimientos(datosMovimientos);

            });

    }



    /* return del componente */
    return (
        <div>

            <h1>Movimientos</h1>
            <section className="registrar flex centrado">
                <div>

                    <p>hola mundo</p>


                    {/*  {movimientos  && movimientos.map((item) => (
                        <p key={item.id}>{item.concepto}</p>
                     ))} */}

                    <ol>
                      {/*   {movimientos ? (

                            movimientos.map((item, index) => (
                                <li id='li' key={item.id}>{item.conepto}</li>)




                            )
                         ):(
                        <li id='li' >no hay movimiento</li>
                            )} */}
                    </ol>

                    {/*   <table className="tablaMovimientos">
                        <thead>
                            <tr>


                                <th>Concepto</th>
                                <th>Categoria</th>
                                <th>Medio de pago</th>
                                <th>Total monto</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        {movimientos ? (

                            movimientos.map((item) => (

                                <tbody key={item.id}>
                                    <tr>
                                        <td>{item.concepto}</td>
                                        <td>${item.categoria}</td>
                                        <td>${item.medio}</td>
                                        <td>{item.total}</td>
                                        <td>{item.fecha}</td>
                                    </tr>
                                </tbody>
                            ))
                        ) : (
                            <thead><tr><td>no hay movimientos</td></tr></thead>
                        )}
                    </table> */}

                </div>
            </section>
        </div>
    )
}

export default ListadoDeMovimientos