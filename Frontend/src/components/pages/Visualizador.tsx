import React, {useState} from 'react'
import doc01 from "../../assets/documentoPrueba.pdf"
import useModal from '../CustomHooks/useModal';
import { BotonSimple, BotonIcon, BotonExtendido } from '../styledUnique/Buttons';
import { Modal } from '../utilidades/Modal'



export const Visualizador = (props: {children:any, buttonName: string}) => {

  const [isOpenModal, openModal, closeModal] = useModal()

  return (
    <>
        <BotonIcon>
          <i onClick={openModal} className='bx bxs-file-pdf'></i>
        </BotonIcon>
        <BotonSimple onClick={openModal}> {props.buttonName? props.buttonName: "Editar"}</BotonSimple>


        <Modal isOpen={isOpenModal} closeModal={closeModal}> 
          {props.children? props.children: []}
        
        </Modal>
        {/**/}
    </>
  )
}

