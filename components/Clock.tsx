import styled from "styled-components";
const Clock = () => {
  return (
    <ClockContainer>
      <TimerText>05:00</TimerText>
      <StartPauseButton></StartPauseButton>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`;
