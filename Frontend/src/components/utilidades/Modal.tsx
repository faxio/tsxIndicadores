import React from 'react'
import "./modal.css"
import doc01 from "../../assets/documentoPrueba.pdf"
import { Texto, TextoNegrita } from '../styledUnique/Texto'
import { BotonExtendido } from '../styledUnique/Buttons'
import { TextoEmergente, VentanaEmergente } from '../styledUnique/VentanasEmergentes'

export const Modal = (props:{isOpen: boolean, closeModal:any}) => {

    const handleModalDialogClick = (e:any) => {
        e.stopPropagation();
    }

  {/*<VentanaEmergente className={`${props.isOpen && 'modal-open'}`} onClick={props.closeModal}>*/}

  return (
    <VentanaEmergente isOpen={props.isOpen} onClick={props.closeModal}>
        <TextoEmergente className='modalText' onClick={handleModalDialogClick}>
            

            <div className='publicacion'>
                <iframe  height="100%" width="100%" src={doc01}></iframe>
            </div>
            <div className='inputPublicacion'>
                <TextoNegrita> Verificar valores </TextoNegrita>
                <input placeholder='Eje'/>
                <input placeholder='Nombre'/>
                <input placeholder='Publicador'/>
                <input placeholder='Integrantes'/>
                <input placeholder='Numero Publicacion'/>
                <BotonExtendido> Confirmar </BotonExtendido>
            </div>
        </TextoEmergente>



    </VentanaEmergente>
  )
}
