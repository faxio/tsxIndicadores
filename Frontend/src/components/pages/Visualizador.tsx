import React, {useState} from 'react'
import doc01 from "../../assets/documentoPrueba.pdf"
import { BotonSimple, BotonIcon, BotonExtendido } from '../styledUnique/Buttons';
import { Modal } from '../utilidades/Modal'



export const Visualizador = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = ()=> {
    setIsOpenModal(true);
  }
  
  const closeModal = () => {
    setIsOpenModal(false);
  }
  return (
    <>
        <BotonIcon>
          <i onClick={openModal} className='bx bxs-file-pdf'></i>
        </BotonIcon>
        <BotonSimple onClick={openModal}>Editar</BotonSimple>
        <BotonExtendido >Confirmar</BotonExtendido>

        <Modal isOpen={isOpenModal} closeModal={closeModal}/>
        {/**/}
    </>
  )
}

