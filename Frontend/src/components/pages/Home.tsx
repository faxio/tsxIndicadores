import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BoxIndicador } from '../BoxIndicador'
import { Ejes } from '../interfaces'
import logosvg from '../../assets/logo.svg'

export const Home = ( props: {ejes: Array<Ejes>}) => {

  const [ejesIn, setEjesIn] = useState(props.ejes);
  return (
    <div className='home'>
      <div className='innovin2'>
        <img className="logo" src={logosvg}/>
        <div className='buscadorCompleto b2'> 
          <div id='centerBuscador'>
          <span className='buscador'> 
            <i className='bx bx-search'></i>
          </span>
          <input 
            className='inputSearch busquedaHome' 
            placeholder='Buscador de indicadores...'
          />
          </div>
        </div>
      </div>
      <div className='contenedorHome'>


      <div className='contenedorEjes'>

      <div className='itemsAcordeon itemsAcordeonHome'>
            {ejesIn.map(ejes => {
              return(
              <details className='acordeon acordeon2' key={ejes.id}>
                <summary>{ejes.nombre}</summary>
                <div className='contenedorBox'>
                  <BoxIndicador nombre={"Numero de publicaciones"}/>
                  <BoxIndicador nombre={"Numero de publicaciones de ingeniería"}/>
                  <BoxIndicador nombre={"Publicaciones con couator(es) extranjeros"}/>
                  <BoxIndicador nombre={" Número de grados de ingeniería otorgados (pregrado)"}/>
                </div>
            </details>
              )
            })}
          </div>


        </div>
      </div>
    </div>
  )
}
