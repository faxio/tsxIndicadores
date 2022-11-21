import React from 'react'
import { Visualizador } from '../pages/Visualizador'
import { BotonExtendido } from '../styledUnique/Buttons'
import { BoxEvidencias, Stack } from '../styledUnique/Contenedores'
import { EtiquetasIndicadores, Texto, TextoBlockTable, TextoTituloNegrita } from '../styledUnique/Texto'

export const EvidenciaSinIndicador = (props:{type:string}) => {
  return (
    <BoxEvidencias type={props.type}>
      <EtiquetasIndicadores >M25</EtiquetasIndicadores>
      <EtiquetasIndicadores >M47</EtiquetasIndicadores>
      <EtiquetasIndicadores >M104</EtiquetasIndicadores>
            <TextoTituloNegrita>Nombre evidencia: </TextoTituloNegrita>
            <TextoBlockTable>
              <Stack>
              <Visualizador/>
              
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
