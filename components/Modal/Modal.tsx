
import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }: any) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop />
            <ModalContainer isOpen={isOpen} onClose={onClose} />
          </>
        )}
      </AnimatePresence>
    </> 
  );
};

export default Modal;
