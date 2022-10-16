import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BoxIndicador } from '../BoxIndicador'
import { Ejes, IndicadoresResumidos } from '../interfaces'
import logosvg from '../../assets/logo.svg'

export const Home = ( props: {ejes: Array<Ejes>, indicadoresResumidos: Array<IndicadoresResumidos>}) => {

  const [ejesIn, setEjesIn] = useState(props.ejes);
  const [indicadores, setIndicadores] = useState(props.indicadoresResumidos);

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

                  { indicadores.map((indi) => {
                    return(       
                            (ejes.nombre === indi.eje) ?          
                            <div className='contenedorBox' key={indi.id}> 
                              <BoxIndicador {...indi}/>
                            </div>:
                            []
                          )
                  })}
            </details>
              )
            })}
          </div>


        </div>
      </div>
    </div>
  )
}
