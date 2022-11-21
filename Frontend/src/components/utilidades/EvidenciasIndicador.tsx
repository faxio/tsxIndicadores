import React from 'react'
import { Visualizador } from '../pages/Visualizador'
import { BotonExtendido } from '../styledUnique/Buttons'
import { BoxEvidencias, Stack } from '../styledUnique/Contenedores'
import { Texto, TextoBlockTable, TextoNegrita, TextoTituloNegrita } from '../styledUnique/Texto'
import { InputPublicación } from '../styledUnique/VentanasEmergentes'

export const EvidenciasIndicador = (props:{type:string}) => {
  return (
    <BoxEvidencias type={props.type}>
            <TextoTituloNegrita>Nombre evidencia</TextoTituloNegrita>
            <TextoBlockTable>
              <Texto>Variable 1: </Texto>
              <Texto>Variable 2: </Texto>
              <Stack>
              <Visualizador>
                <TextoNegrita> Verificar valores </TextoNegrita>
                <InputPublicación placeholder='Eje'/>
                <BotonExtendido> Confirmar </BotonExtendido>
              </Visualizador>
              <BotonExtendido >Confirmar</BotonExtendido>
              </Stack>
            </TextoBlockTable>
          </BoxEvidencias>

  )
}
