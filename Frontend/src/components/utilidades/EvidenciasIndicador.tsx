import React from 'react'
import { Visualizador } from '../pages/Visualizador'
import { BoxEvidencias, Stack } from '../styledUnique/Contenedores'
import { Texto, TextoBlockTable, TextoTituloNegrita } from '../styledUnique/Texto'

export const EvidenciasIndicador = (props:{type:string}) => {
  return (
    <BoxEvidencias type={props.type}>
            <TextoTituloNegrita>Nombre evidencia</TextoTituloNegrita>
            <TextoBlockTable>
              <Texto>Variable 1: </Texto>
              <Texto>Variable 2: </Texto>
              <Stack>
              <Visualizador/>
              <BotonExtendido >Confirmar</BotonExtendido>
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
