import React from 'react'
import { BoxIndicador } from '../BoxIndicador'


export const Home = () => {
  return (
    <div className='contenedorBox'>
      <BoxIndicador nombre={"Numero de publicaciones"}/>
      <BoxIndicador nombre={"Numero de publicaciones de ingeniería"}/>
      <BoxIndicador nombre={"Publicaciones con couator(es) extranjeros"}/>
      <BoxIndicador nombre={" Número de grados de ingeniería otorgados (pregrado)"}/>
    </div>
  )
}
