import React, { useEffect, useState } from 'react'
import { Navigate , useNavigate, useParams} from 'react-router-dom'
import "../estilos/indicadores.css"
import {Visualizador} from './Visualizador'
import doc01 from "../../assets/documentoPrueba.pdf"
import { Navbar } from '../Navbar'
import { indicadoresResumidos } from '../apifake'
import { IndicadoresResumidos as indi } from '../interfaces'

export const Indicadores = () => {

    const { idIndicador } = useParams();
    const [indicador, setIndicador] = useState<indi>();

    useEffect(() => {
      setIndicador(indicadoresResumidos.filter( indi => indi.id === idIndicador)[0])
    }, [idIndicador])
    

    return (
      <div className='contenedor'>
        <Navbar/>
        <div className='indicadores'>
          <div className='contenedorNombre'>
            <h2>Nombre indicador: {indicador?.nombre}</h2>
          </div>
        
          <button className='button'>Confirmar evidencias</button>
          <h2>Todas las evidencias</h2>
          <Visualizador/>

          {/*console.log(idIndicador)*/}
        </div>
      </div>
    )
}
