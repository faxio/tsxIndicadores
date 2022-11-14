import React, { useEffect, useState } from 'react'
import { Navigate , useNavigate, useParams} from 'react-router-dom'
import {Visualizador} from './Visualizador'
import doc01 from "../../assets/documentoPrueba.pdf"
import { Navbar } from '../Navbar'
import { indicadoresResumidos } from '../apifake'
import { IndicadoresResumidos as indi } from '../interfaces'
import { Box, BoxEvidencias, ContenedorIndicador, Stack } from '../styledUnique/Contenedores'
import { VariablesIndicadores } from '../styledUnique/Input/VariablesIndicadores'
import { Texto, TextoBlock, TextoBlockTable, TextoTitulo, TextoTituloNegrita } from '../styledUnique/Texto'


export const Indicadores = () => {

    const { idIndicador } = useParams();
    const [indicador, setIndicador] = useState<indi>();

    useEffect(() => {
      setIndicador(indicadoresResumidos.filter( indi => indi.id === idIndicador)[0])
    }, [idIndicador])
    

    return (
      <div className='contenedor'>
        <Navbar/>
        <ContenedorIndicador>
          <h2>Nombre indicador: {indicador?.nombre}</h2>
          <h2>Todas las evidencias</h2>

          <BoxEvidencias type="error">
            <TextoTituloNegrita>Nombre evidencia</TextoTituloNegrita>
            <TextoBlockTable>
              <Texto>Variable 1: </Texto>
              <Texto>Variable 2: </Texto>
              <Stack>
              <Visualizador/>
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

          {/*console.log(idIndicador)*/}
        </ContenedorIndicador>
      </div>
    )
}
