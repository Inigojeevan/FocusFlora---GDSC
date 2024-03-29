import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = ({isOpen, onClose} : any) => {
    return(
        <>
            { isOpen && (
               <>
               <Backdrop />
                <ModalContainer isOpen={isOpen} onClose={onClose}/>
                </>
            )
            }
        </>
    )
}

export default Modal;