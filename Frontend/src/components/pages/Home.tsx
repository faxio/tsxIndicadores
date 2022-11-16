import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BoxIndicador } from '../BoxIndicador'
import { Ejes, IndicadoresResumidos } from '../interfaces'
import logosvg from '../../assets/logo.svg'
import { Buscador, ContenedorBuscador, ContenedorIconBuscador } from '../styledUnique/Input/Buscadores';
import { LogoInnoving } from '../styledUnique/Imagenes';
import { Topbar } from '../styledUnique/Contenedores';

export const Home = ( props: {ejes: Array<Ejes>, indicadoresResumidos: Array<IndicadoresResumidos>}) => {

  const [ejesIn, setEjesIn] = useState(props.ejes);
  const [indicadores, setIndicadores] = useState(props.indicadoresResumidos);

  return (
    <>
      <Topbar>
        <LogoInnoving src={logosvg}/>
        <ContenedorBuscador marginLeft="20px"> 
          <ContenedorIconBuscador> 
            <i className='bx bx-search'></i>
          </ContenedorIconBuscador>
          <Buscador 
            width="60%"
            placeholder='Buscador de indicadores...'
          />
        </ContenedorBuscador>
      </Topbar>
      <div className='contenedorHome'>


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
    </>
  )
}
