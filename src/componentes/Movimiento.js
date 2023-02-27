import React from 'react'
import MoviUnidad from './MoviUnidad'

const Movimiento = ({movimientos}) => {
  return (
    <div>
        {movimientos.map(m => <MoviUnidad key={m.id} {...m}/>)}
    </div>
  )
}

export default Movimiento