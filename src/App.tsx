import styled from 'styled-components';
import Tags from "../components/Tags"
import Timer from "../components/Timer"
import Modal from "../components/Modal/Modal"
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';
const App = () => {

  const  [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false) 
  }
  const onOpen = () => {
    setIsOpen(true)
  }

  return (
   <>
   <Modal isOpen = {isOpen} onClose = {onClose} />
      <Title>Focus<span className="green">Flora</span></Title>
      <Tags />
      <Timer />
      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>
   </> 
  )
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  .green {
    color: lightgreen
  }
  `;

  const CogIcon = styled.div`
    display: flex;
    justify-content: center;
    font-size: 4rem;
  `;