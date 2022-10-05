import React from 'react'
import "./boxIndicadores.css"

export const BoxIndicador = (props: {nombre:string}) => {
  return (
    <div className='boxPrincipal'>{props.nombre}</div>
  )
}
