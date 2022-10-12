import React from 'react'
import "./modal.css"
import doc01 from "../../assets/documentoPrueba.pdf"

export const Modal = (props:{isOpen: boolean, closeModal:any}) => {

    const handleModalDialogClick = (e:any) => {
        e.stopPropagation();
    }

  return (
    <div className={`modal ${props.isOpen && 'modal-open'}`} onClick={props.closeModal}>
        <div className='modalText' onClick={handleModalDialogClick}>

            <button onClick={props.closeModal}>
                Close modal
            </button>
            <h2>Modal</h2>
            <iframe height="90%" width="100%" src={doc01}></iframe>
        </div>

    </div>
  )
}
