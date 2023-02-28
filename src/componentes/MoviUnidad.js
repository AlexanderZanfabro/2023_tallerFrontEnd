import React from 'react'

const MoviUnidad = ({concepto, medio, total, fecha, id}) => {
  return (
    <div className='cajaDeMov'>
      <input type='checkbox' id={`${id}`} className='checkbox'/>`{concepto} - pago: {medio} - monto: {total} - fecha: {fecha}`
      </div>
  )
}

export default MoviUnidad