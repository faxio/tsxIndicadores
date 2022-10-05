import React from 'react'
import { Navigate , useNavigate, useParams} from 'react-router-dom'
import "../estilos/indicadores.css"
import {Visualizador} from './Visualizador'
import doc01 from "../../assets/documentoPrueba.pdf"
import { Navbar } from '../Navbar'

export const Indicadores = () => {

    const navigate = useNavigate();
    const { idIndicador } = useParams();

    return (
      <div className='contenedor'>
        <Navbar/>
        <div className='indicadores'>
          <div className='contenedorNombre'>
            <h2>Nombre indicador</h2>
          </div>
        
          <h2>Meta: 1</h2>
          <h2>Resultado: 2</h2>
          <button className='button'>Confirmar valor</button>
          <button className='button'>Mostrar evidencias</button>
          <h2>Todas las evidencias</h2>
          <Visualizador/>

          {/*console.log(idIndicador)*/}
        </div>
      </div>
    )
}
