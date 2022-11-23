import React from 'react'
import doc01 from "../../assets/documentoPrueba.pdf"
import { Texto, TextoNegrita } from '../styledUnique/Texto'
import { BotonExtendido } from '../styledUnique/Buttons'
import { InputPublicación, Publicacion, TextoEmergente, TextoPublicacion, VentanaEmergente } from '../styledUnique/VentanasEmergentes'

export const Modal = (props:{isOpen: boolean, closeModal:any, children: any}) => {

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
            {props.children? props.children: []}

            </TextoPublicacion>


        </TextoEmergente>



    </VentanaEmergente>
  )
}
