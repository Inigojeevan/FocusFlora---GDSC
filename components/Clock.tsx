import styled from "styled-components";
import { useEffect, useState } from "react";


const Clock = () => {
    const [time, setTime] = useState(500);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time -1);
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [time, isActive])

    const activateTimer = () => {
        setIsActive(!isActive); //true
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
  
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;
