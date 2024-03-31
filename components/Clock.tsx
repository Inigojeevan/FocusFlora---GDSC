import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";

const Clock = () => {
    const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);
    const [completedSessions, setCompletedSessions] = useState<number>(0);

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
        const elapsedTime = initTime - time; // Calculate elapsed time
        const completedSessions = parseInt(localStorage.getItem("CompletedSessions") || "0", 10); // Retrieve completed sessions from localStorage or default to 0
        localStorage.setItem("time", JSON.stringify(initTime)); // Store initial time
        localStorage.setItem("CompletedSessions", String(completedSessions + 1)); // Increment completed sessions count
        localStorage.setItem("ElapsedTime", String(elapsedTime)); // Store elapsed time for the current session
        setCompletedSessions(completedSessions + 1); // Update completed sessions state
    };

    const resetTime = () => {
        setTime(initTime);
        setIsActive(false);
        SessionHandler();
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
