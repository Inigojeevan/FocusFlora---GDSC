import styled from "styled-components";
import { useContext, useEffect } from "react";
import { StateContext } from "./StateProvider";


const Clock = () => {
    const {time, setTime, isActive, setIsActive, initTime} = useContext(StateContext);

    useEffect(() => {
        if(isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time: number) => time -1);
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [time, isActive])

    const activateTimer = () => {
        setIsActive(!isActive); //true
    }

    const resetTime = () => {
        setTime(initTime);
        setIsActive(false);
    }

    const getTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={activateTimer}>{isActive ? "Pause" : "Start"}</StartPauseButton>
       <ResetButton onClick={resetTime}>Reset</ResetButton>
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