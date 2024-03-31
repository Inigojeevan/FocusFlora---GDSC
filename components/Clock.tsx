import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";

const Clock = () => {
    const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);
    const [completedSessions, setCompletedSessions] = useState<number>(0);
    const [uncompletedSessions, setUncompletedSessions] = useState(() => {
      return parseInt(localStorage.getItem("UncompletedSessions") || "0", 10);
  });

    useEffect(() => {
        const savedTime = JSON.parse(localStorage.getItem("time") || '0');
        const savedCompletedSessions = parseInt(localStorage.getItem("CompletedSessions") || "0", 10);
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
        const completedSessions = parseInt(localStorage.getItem("CompletedSessions") || "0", 10); 
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
    }, [time])

    const resetTime = () => {
      if(isActive && time !== 0) {
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
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    return (
        <ClockContainer>
            <TimerText>{getTime(time)}</TimerText>
            <StartPauseButton onClick={activateTimer}>{isActive ? "Pause" : "Start"}</StartPauseButton>
            <ResetButton onClick={resetTime}>Reset</ResetButton>
            <SessionInfo>Completed Sessions: {completedSessions}</SessionInfo>
            <SessionInfo>Uncompleted Sessions: {uncompletedSessions}</SessionInfo>
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
    color: white;
`;
