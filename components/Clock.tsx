import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";

const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);
  const [completedSessions, setCompletedSessions] = useState<number>(0);
  const [uncompletedSessions, setUncompletedSessions] = useState<number>(() => {
    return parseInt(localStorage.getItem("UncompletedSessions") || "0", 10);
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const savedTime = JSON.parse(localStorage.getItem("time") || "0");
    const savedCompletedSessions = parseInt(
      localStorage.getItem("CompletedSessions") || "0",
      10
    );
    if (savedTime) {
      setTime(savedTime);
    }
    if (!isNaN(savedCompletedSessions)) {
      setCompletedSessions(savedCompletedSessions);
    }
  }, [setTime]);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time: number) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive, setTime]);

  const activateTimer = () => {
    setIsActive(!isActive);
  };

  const SessionHandler = () => {
    const elapsedTime = initTime - time;
    const completedSessions = parseInt(
      localStorage.getItem("CompletedSessions") || "0",
      10
    );
    localStorage.setItem("time", JSON.stringify(initTime));
    localStorage.setItem("CompletedSessions", String(completedSessions + 1));
    localStorage.setItem("ElapsedTime", String(elapsedTime));
    setCompletedSessions(completedSessions + 1);
  };

  useEffect(() => {
    if (time === 0 && isActive) {
      setIsActive(false);
      SessionHandler();
    }
  }, [time, isActive]);

  const resetTime = () => {
    if (isActive && time !== 0) {
      const uncompleted = uncompletedSessions + 1;
      localStorage.setItem("UncompletedSessions", String(uncompleted));
      setUncompletedSessions(uncompleted);
    }
    setTime(initTime);
    setIsActive(false);
  };

  const getTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const clearSessions = () => {
    setCompletedSessions(0);
    setUncompletedSessions(0);
    localStorage.setItem("CompletedSessions", "0");
    localStorage.setItem("UncompletedSessions", "0");
  }

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={activateTimer}>
        {isActive ? "Pause" : "Start"}
      </StartPauseButton>
      <ResetButton onClick={resetTime}>Reset</ResetButton>
      <SessionInfo onClick={openModal}>
       View Sessions
      </SessionInfo>
      {showModal && (
        <Modal>
          <ModalContent>
            <ModalText>
              Completed Sessions: {completedSessions}
              <br />
              Uncompleted Sessions: {uncompletedSessions}
            </ModalText>
            <CloseButton onClick={closeModal}>Close</CloseButton>
            <ClearSessionButton onClick={clearSessions}>Clear Session</ClearSessionButton>
          </ModalContent>
        </Modal>
      )}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
  font-size: 8rem;
  color: white;
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 4rem;
  padding-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: cyan;
`;

const ResetButton = styled(StartPauseButton)`
  color: red;
`;

const SessionInfo = styled.p`
  font-size: 1.5rem;
  padding-top: 5rem;
  color: white;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  text-align: center;
  gap: 20px;
`;

const CloseButton = styled.button`
  all: unset;
  padding: 1rem 4rem;
  font-size: 2rem;
  background: darkgreen;
  border-radius: 0.5rem;
`;

const ModalText = styled.p`
  font-size: 18px;
  color: black;
`;

const ClearSessionButton = styled(CloseButton)``;