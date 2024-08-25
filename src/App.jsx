import './App.css';
import styled from "styled-components";
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { FaCog } from "react-icons/fa";

function App() {

  /**
   * Estado utilizado para controlar visibilidade do modal de configuração
   * É inicializada como false (ou fechado)
   */
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () =>{
    setIsOpen(false);
  }
  const onOpen = () =>{
    setIsOpen(true);
  }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} />
      {/* Title, Tags, Timer, e CogIcon são componentes renderizados no layout. */}
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
      <CogIcon onClick={onOpen}>
        <FaCog/>
      </CogIcon>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 450px){
    justify-content: center;
    }
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;