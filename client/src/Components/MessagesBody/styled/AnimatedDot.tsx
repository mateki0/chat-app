import styled, { keyframes } from "styled-components";

const Dots = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;
const AnimatedDot = styled.span`
  animation: 1s ${Dots} linear infinite;
  animation-delay: -0.1s;
  ::before {
    content: ".";
    animation: 1s ${Dots} linear infinite;
  }
  ::after {
    content: ".";
    animation: 1s ${Dots} linear infinite;
    animation-delay: -0.2s;
  }
`;

export default AnimatedDot;
