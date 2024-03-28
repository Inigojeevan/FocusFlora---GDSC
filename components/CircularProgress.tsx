import styled from "styled-components";
import { useState } from "react";
import Clock from "./Clock";

interface OuterCircleProps {
  progress: number;
}

const CircularProgress = () => {
  const [progress, setProgress] = useState(100);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;

const OuterCircle = styled.div<OuterCircleProps>`
  width: 35rem;
  height: 35rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    lightgreen ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;

const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  background: #4e704e;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
