import React from 'react'
import "./modal.css"
import doc01 from "../../assets/documentoPrueba.pdf"
import { Texto, TextoNegrita } from '../styledUnique/Texto'
import { BotonExtendido } from '../styledUnique/Buttons'
import { InputPublicación, Publicacion, TextoEmergente, TextoPublicacion, VentanaEmergente } from '../styledUnique/VentanasEmergentes'

export const Modal = (props:{isOpen: boolean, closeModal:any}) => {

    const handleModalDialogClick = (e:any) => {
        e.stopPropagation();
    }

  {/*<VentanaEmergente className={`${props.isOpen && 'modal-open'}`} onClick={props.closeModal}>*/}

  return (
    <VentanaEmergente isOpen={props.isOpen} onClick={props.closeModal}>
        <TextoEmergente onClick={handleModalDialogClick}>
            

            <Publicacion>
                <iframe  height="100%" width="100%" src={doc01}></iframe>
            </Publicacion>
            <TextoPublicacion className='inputPublicacion'>
                <TextoNegrita> Verificar valores </TextoNegrita>
                <InputPublicación placeholder='Eje'/>
                <InputPublicación placeholder='Nombre'/>
                <InputPublicación placeholder='Publicador'/>
                <InputPublicación placeholder='Integrantes'/>
                <InputPublicación placeholder='Numero Publicacion'/>
                <BotonExtendido> Confirmar </BotonExtendido>
            </TextoPublicacion>
        </TextoEmergente>



    </VentanaEmergente>
  )
}
