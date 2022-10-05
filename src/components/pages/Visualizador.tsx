import React, {useState} from 'react'
import doc01 from "../../assets/documentoPrueba.pdf"
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
        <button onClick={openModal} className="button evidencias">
          Publicación 1
        </button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}/>
        {/**/}
    </>
  )
}

