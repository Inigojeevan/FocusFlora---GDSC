import styled from "styled-components";
import CircularProgress from "./CircularProgress";
const Timer = () => {
  return (
    <TimerContainer>
      <CircularProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 45rem;
  height: 45rem;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;    
  place-items: center;
  box-shadow: -50px -50px 150px rgba(255, 255, 255, 0.5),
    50px 50px 100px rgba(107, 157, 100, 0.5), 0px 0px 10px rgba(89, 174, 89, 0.3),
    0px 0px 10px rgba(81, 144, 81, 0.3),
    0px 0px 10px rgba(130, 203, 123, 0.3);
`;
