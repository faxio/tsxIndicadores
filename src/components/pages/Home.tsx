import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BoxIndicador } from '../BoxIndicador'
import { Ejes } from '../interfaces'

export const Home = ( props: {ejes: Array<Ejes>}) => {

  const [ejesIn, setEjesIn] = useState(props.ejes);
  return (
    <div className='home'>
      <div className='buscadorCompleto'> 
        <span className='buscador'> 
          <i className='bx bx-search'></i>
        </span>
        <input 
          className='inputSearch busquedaHome' 
          placeholder='Buscador de indicadores...'
        />
        </div>

      <div className='contenedorEjes'>

      <div className='itemsAcordeon itemsAcordeonHome'>
            {ejesIn.map(ejes => {
              return(
              <details className='acordeon' key={ejes.id}>
                <summary>{ejes.nombre}</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>
              )
            })}
          </div>

        <div className='contenedorBox'>
          <BoxIndicador nombre={"Numero de publicaciones"}/>
          <BoxIndicador nombre={"Numero de publicaciones de ingeniería"}/>
          <BoxIndicador nombre={"Publicaciones con couator(es) extranjeros"}/>
          <BoxIndicador nombre={" Número de grados de ingeniería otorgados (pregrado)"}/>
        </div>
      </div>
    </div>
  )
}
